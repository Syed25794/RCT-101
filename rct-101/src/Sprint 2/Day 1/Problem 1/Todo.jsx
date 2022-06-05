import React from 'react'
import styles from './Todo.module.css'

export const Todo = ({text ,done,id,handleCompleted}) => {
  return (
      <>
      <div className={styles.todo_div}>
      <input className={styles.checkBox_div} onChange={()=>handleCompleted(id)}  type="checkbox"/>
      {done ? <p className={styles.text}>{text}</p> : <p className={styles.text} style={{textDecoration:"line-through"}}>{text}</p>}
      </div>
      </>
  )
}
