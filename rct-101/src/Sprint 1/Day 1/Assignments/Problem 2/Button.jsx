import React from 'react';
import styles from './Button.module.css';

function Button(){

    function handleClick(){
        console.log('someone clicked me');
    }

    return(
        <div >
        <button onClick={handleClick} className={styles.contact}>Contact</button>
        </div>
    )
}

export default Button;