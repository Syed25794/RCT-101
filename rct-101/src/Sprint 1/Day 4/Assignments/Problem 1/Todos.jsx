import React from 'react'
import { Todo } from './Todo'
import { Uncompleted } from './Uncompleted'
import styles from './Todos.module.css'

export const Todos = ({todos,handleRem,handleCompleted}) => {
    const [show,setShow]=React.useState(true);
  return (
    <div>
    <div>
    {todos.map((todo)=>{
        return <Todo handleCompleted={handleCompleted} done={todo.done} handleRem={handleRem} key={todo.id} id={todo.id} text={todo.text}/>
    })}
    </div>
    { show ? <div><button className={styles.show}  onClick={()=>setShow(!show)}>Hide Completed Todos</button>
    {todos.map((todo)=>{
        return todo.done ? null : <Uncompleted handleCompleted={handleCompleted}  handleRem={handleRem} key={todo.id} id={todo.id} text={todo.text}/>
    })}</div> : (<button className={styles.show} onClick={()=>setShow(!show)}>Show Completed Todos</button>) }
    </div>
  )
}
