import React from 'react';
import styles from './TodoItem.module.css'

export const TodoItem = ({value}) => {
  return (
    <div className={styles.todo_div}>
    {value}
    </div>
  )
}
