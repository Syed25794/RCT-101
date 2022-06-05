import React from 'react'
import styles from './AddTodo.module.css'

export const AddTodo = ({addTodo}) => {
    const [query,setQuery]=React.useState("");
  return (
    <div className={styles.input_div}>
    <input className={styles.input_field} value={query} type="text" placeholder='Add Todos here' onChange={(e)=>setQuery(e.target.value)}/>
    <button className={styles.btn} onClick={()=>{addTodo(query) 
         setQuery("");}}>+</button>
    </div>
  )
}
