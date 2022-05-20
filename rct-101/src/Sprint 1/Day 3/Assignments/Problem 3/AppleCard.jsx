import React from 'react'
import styles from './AppleCard.module.css'

export const AppleCard = ({logo,date,heading,subHeading,color,device}) => {
  return (
    <div className={styles.container} style={{background:color}}>
    <div className={styles.date_logo}>
    <p className={styles.date} >{date}</p>
    <img className={styles.logo} src={logo} alt='img'/>
    </div>
    <div className={styles.case_study}>
    <p className={styles.case_text}>Case Study</p>
    </div>
    <div className={styles.heading_subH}>
    <h2>{heading}</h2>
    <h2>{subHeading}</h2>
    </div>
    <div className={styles.bottom_box}>
    <p className={styles.device}>{device}-Mobile</p>
    <img className={styles.arrow} src='/Arrow.png' alt='img' />
    </div>
    </div>
  )
}
