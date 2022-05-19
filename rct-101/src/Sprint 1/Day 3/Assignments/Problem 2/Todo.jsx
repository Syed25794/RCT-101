import React from 'react';
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todo.module.css';

export const Todo=()=>{

    const [value,setValue]=React.useState("");
    const [todos,setTodos]=React.useState([]);

    const addTodo=(value)=>{
        const payload={
            name:value,
            id:uuidv4()
        }
        setTodos([...todos,payload]);
    }

    return(
        <>
        <input className={styles.input_field} type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Write new todo here"/>
        <button disabled={!value} className={styles.button_tag}
        onClick={()=>{addTodo(value)
        setValue("");}}>Add</button>
        <TodoList todos={todos} />
        </>
    )
}