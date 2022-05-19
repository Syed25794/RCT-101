import React from 'react'
import { TodoItem } from './TodoItem'


export const TodoList=({todos})=>{
    return(
        <div >
        {todos.map(elem=>{
          return  <TodoItem  key={elem.id} value={elem.name} />
        })}
        </div>
    )
}