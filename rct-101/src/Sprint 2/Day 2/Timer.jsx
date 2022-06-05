import React,{useEffect} from 'react';
import styles from './Timer.module.css';

export const Timer =({initial_time,end_time})=>{
    const [time,setTime]=React.useState(initial_time);
    useEffect(()=>{
        let id=setInterval(() => {
            if( time < end_time ){
                setTime((prev)=>prev+1);
            }else{
                clearInterval(id);
            }
        }, 1000);
        
        return ()=>{
        clearInterval(id);
        }
    },[time,end_time]);

    return(
        <div className={styles.main_div}>
        <div><h1>Timer</h1></div>
        <div><span style={{color:"green"}}>Start time : {initial_time}</span><span style={{color:"red"}}> - End time : {end_time}</span></div>
        <div><h2>{time}</h2></div>
        </div>
    )
}