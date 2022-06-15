import React, { useEffect, useRef, useState} from "react";
import styles from "./StopWatch.module.css";

export const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [show,setShow]=useState(true);
//   const [timerId, setTimerId] = useState(null);

  let timerId=useRef(null);
  //used to persistant the value without re-rendring the page.Nothing to do with dom updation
  const start = () => {
      setShow(!show);
    if (!timerId.current) {
      let id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
      timerId.current=id;
    }
  };
  const pause = () => {
      setShow(!show);
      clearInterval(timerId.current);
      timerId.current=null;
  };
  const reset = () => {
      clearInterval(timerId.current);
      timerId.current=null;
      setTime(0);
  };
  useEffect(()=>{
      return()=>{
          clearInterval(timerId.current);//clean up when component unmounted
      }
  },[])

  return (
    <div className={styles.main_div}>
    <h3 className={styles.text_div}>
      {`${Math.floor(time/ 60000)}` > 0 ? <span className={styles.s_text}>{`${Math.floor(Math.floor(Math.floor(time/100)/60)/60)%24}H`}<span style={{color:"white",fontSize:"30px",fontWeight:"lighter"}}>h</span></span> : null }
      {(`${Math.floor(time/ 6000)}` > 0) ? <span className={styles.s_text}>{`${Math.floor(Math.floor(time/100)/60)%60}`}<span style={{color:"white",fontSize:"30px",fontWeight:"lighter"}}>m</span></span> : null }
      <span className={styles.s_text}>{`${Math.floor(time/100)%60}`}<span style={{color:"white",fontSize:"30px",fontWeight:"lighter"}}>s</span></span>
      <span className={styles.ms_text}>{`${time%100}`}</span></h3>
      <div className={styles.btn_div}>{show ? <button onClick={start} className={styles.start_btn}>START</button> : <button onClick={pause} className={styles.start_btn}>STOP</button>}
      <button onClick={reset} className={styles.reset_btn}>RESET</button></div>
    </div>
  );
};
