import React from 'react'
import Button from './Button'
import { Links } from './Links'
import Logo from './Logo'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.main_div}>
    <div className={styles.nav_div}>
    <Logo/>
    <Links/>
    <Button/>
    </div>
    </div>
  )
}
