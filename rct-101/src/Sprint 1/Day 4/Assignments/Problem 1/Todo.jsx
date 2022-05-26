import React from 'react'
import styles from './Todo.module.css'

export const Todo = ({text ,done,id,handleRem,handleCompleted}) => {
  return (
      <>
      {done ?    <div className={styles.todo_div}>
      <input className={styles.checkBox_div} onChange={()=>handleCompleted(id)}  type="checkbox" />
      <p className={styles.text}>{text}</p>
      <button className={styles.remove} onClick={()=>handleRem(id)}>X</button>
      </div> : null}
      </>
  )
}
