import React from 'react'
import { Logo } from './Logo';
import styles from './Navbar.module.css';

export const Navbar = () => {

  return (
    <>
    <div className={styles.all_anchor}>
    <div style={{width:"200px"}}>
    <Logo />
    </div>
    <div style={{width:"700px",display:"flex",justifyContent:"space-between",margin:"0px 20px 0px 250px"}}>
    <button style={{background:"rgb(21,171,209)",borderRadius:"10px",height:"35px",width:"80px",marginTop:"10px"}}><a className={styles.anchor} href='#about'>About</a></button>
    <button style={{background:"rgb(21,171,209)",borderRadius:"10px",height:"35px",width:"80px",marginTop:"10px"}}><a className={styles.anchor} href='ef'>Skills</a></button>
    <button style={{background:"rgb(21,171,209)",borderRadius:"10px",height:"35px",width:"80px",marginTop:"10px"}}><a className={styles.anchor} href='gh'>Projects</a></button>
    <button style={{background:"rgb(21,171,209)",borderRadius:"10px",height:"35px",width:"80px",marginTop:"10px"}}><a className={styles.anchor} href='ij'>Contact</a></button>
    </div>
    </div>
    </>
  )
}
