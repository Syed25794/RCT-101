import React from 'react'
import { Todo } from './Todo'

export const Todos = ({todos,handleCompleted}) => {
  return (
    <div>
    <div>
    {todos.map((todo)=>{
        return <Todo handleCompleted={handleCompleted} done={todo.done}  key={todo.id} id={todo.id} text={todo.text}/>
    })}
    </div>
    </div>
  )
}
