import React, { useEffect, useRef, useState } from 'react';
import styles from './Timer.module.css';

export const Timer = ({initial}) => {
    let seconds=initial;
    const [time,setTime]=useState(seconds);
    let timerId=useRef(null);
    const [show,setShow]=useState(true);
    useEffect(()=>{
        if(!show && time > 0){
            let id=setInterval(()=>{
                setTime((prev)=>prev-1);
                timerId.current=id;
            },1000)
        }
        return()=>{
            clearInterval(timerId.current);
        }
    },[show,time])
    const reset=()=>{
        clearInterval(timerId.current);
        timerId.current=null;
        setTime(initial);
        setShow(true);
    }
    const pause=()=>{
        setShow(!show);
        clearInterval(timerId);
    }
  return (
    <>
    <div className={styles.main_div}>
    <h3 className={styles.text_div}>
      {`${Math.floor(time/ 3600)}` > 0 ? <span className={styles.s_text}>{`${Math.floor(Math.floor(time/60)/60)%24}`}<span style={{color:"white",fontSize:"30px",fontWeight:"lighter"}}>h</span></span> : null }
      {(`${Math.floor(time/ 60)}` > 0) ? <span className={styles.s_text}>{`${Math.floor(time/60)%60}`}<span style={{color:"white",fontSize:"30px",fontWeight:"lighter"}}>m</span></span> : null }
      <span className={styles.s_text}>{`${Math.floor(time%60)}`}<span style={{color:"white",fontSize:"30px",fontWeight:"lighter"}}>s</span></span></h3>
      
      <div className={styles.btn_div}>{show ? <button onClick={()=>setShow(!show)} className={styles.start_btn}>START</button> : <button onClick={pause} className={styles.start_btn}>STOP</button>}
      <button onClick={reset} className={styles.reset_btn}>RESET</button></div>
    </div>
    </>
  )
}
