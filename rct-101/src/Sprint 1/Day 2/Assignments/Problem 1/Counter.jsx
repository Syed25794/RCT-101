import React from 'react';
import styles from './Counter.module.css'


export const Counter=({count,handleDec,handleDouble,handleInc})=>{
    return(
        <>
        <h1>Counter</h1>
        <h1 style={{color: count % 2 === 0 ? "green" : "red"}}>{count}</h1>
        <div className={styles.button_div}>
        <button onClick={()=>handleInc(count)}>Increment</button>
        <button onClick={()=>handleDec(count)}>Decrement</button>
        <button onClick={()=>handleDouble(count)}>Double</button>
        </div>
        </>
    )
}