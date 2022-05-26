import React from 'react'
import styles from './Uncompleted.module.css';

export const Uncompleted = ({handleRem,handleCompleted,id,text}) => {
  return (
    <div>
    <div className={styles.todo_div}>
    <input className={styles.checkBox_div} checked onChange={()=>handleCompleted(id)}  type="checkbox" />
    <p className={styles.text} style={{"textDecoration":"line-through"}}>{text}</p>
    <button className={styles.remove} onClick={()=>handleRem(id)}>X</button>
    </div>
    </div>
  )
}
