import React from 'react'
import styles from './Links.module.css'

export const Links = () => {

    let link_array=["Service","Products","About"];
  return (
    <div className={styles.link_div}>
    {link_array.map(link=>(
        <a className={styles.links} key={link.length} href='google.com'>{link}</a>
  ))}
    </div>
  )
}
