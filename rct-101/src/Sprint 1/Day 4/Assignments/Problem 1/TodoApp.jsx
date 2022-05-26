import React from 'react'
import { AddTodo } from './AddTodo'
import { Todos } from './Todos'
import {v4 as uuidv4} from 'uuid'
import styles from './TodoApp.module.css'

export const TodoApp = () => {
    const [todos,setTodos]=React.useState([]);
    const addTodo=(query)=>{
        if(query){
            const payload={
                id:uuidv4(),
                text:query,
                done:true
            }
            setTodos([...todos,payload]);
        }
    }
    const handleRem=(id)=>{
        let data=todos.filter((elem)=>{
            return elem.id !== id;
        })
        setTodos([...data]);
    }
    const handleCompleted=(id)=>{
        todos.forEach((elem)=>{
            if( elem.id === id){
                elem.done= ! elem.done;
            }
        })
        setTodos([...todos]);
        console.log(todos);
    }
  return (
    <div className={styles.main_div}>
    <AddTodo addTodo={addTodo}/>
    <Todos handleRem={handleRem} handleCompleted={handleCompleted} todos={[...todos]}/>
    </div>
  )
}
