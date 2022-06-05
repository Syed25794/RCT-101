import React from 'react'
import styles from './About.module.css';

export const About = () => {
  return (
    <div id='about' className={styles.about_div}>
    <div className={styles.left}>
    <h1 style={{fontSize:"40px",marginLeft:"20px"}}>Hi,</h1>
    <h1 style={{marginLeft:"20px"}}>I'm <span style={{color:"royalblue"}}>Sayyad Gul Mohammad</span></h1>
    <span style={{marginLeft:"20px"}}>I am a full stack web developer</span>
    <div className={styles.div_anchor}>
    <div className={styles.resume}><a style={{textDecoration:"none"}} href='https://docs.google.com/document/d/1M2foxA3mTfRJ03nd5_ahanyXT6MWdNjM/edit?rtpof=true' target="_blank" rel="noreferrer">Resume</a></div>
    <div className={styles.resume}> 
    <a style={{textDecoration:"none"}} href='https://www.linkedin.com/in/sayyad-gul-mohammad/' target="_blank" rel="noreferrer">Linkedin</a>
    </div>
    <div className={styles.resume}>
    <a style={{textDecoration:"none"}} href='https://github.com/Syed25794' target="_blank" rel="noreferrer">GitHub</a>
    </div>
    </div>
    </div>
    <div className={styles.right}>
    <img className={styles.image} src='./My Photo.png'  alt="my_pic" />
    </div>
    </div>
  )
}
