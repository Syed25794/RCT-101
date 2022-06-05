import React, { useEffect } from 'react'
import { AddTodo } from './AddTodo'
import { Todos } from './Todos'
import styles from './TodoApp.module.css';

export const TodoApp = () => {
    const [todos,setTodos]=React.useState([]);
    const[page,setPage]=React.useState(1);

    useEffect(()=>{
        fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`)
        .then((r)=>r.json())
        .then(data=>{setTodos([...data]);console.log(data);});
    },[page]);

    const addTodo=(query)=>{
        if(query){
            fetch(`http://localhost:8080/todos`,{
               method:"POST",
               body:JSON.stringify({
                   text:query,
                   done:true
               }),
               headers:{"content-type":"application/json"}
           })
           .then((r)=> r.json())
           .then(d=>{
               setTodos([...todos]);
           })
        }
    }

    const handleCompleted=(id)=>{
        todos.forEach((elem)=>{
            if( elem.id === id){
                elem.done= ! elem.done;
            }
        })
        setTodos([...todos]);
    }
  return (
    <div className={styles.main_div}>
    <AddTodo addTodo={addTodo}/>
    <Todos  handleCompleted={handleCompleted} todos={[...todos]}/>
    <div className={styles.btn_div}>
    <button  onClick={()=>setPage(page+1)}>Next</button>
    <button  onClick={()=>setPage(page-1)}>Previous</button>
    </div>
    </div>
  )
}
