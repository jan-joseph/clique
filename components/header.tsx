import React, {FC} from 'react'
import styles from '../styles/Header.module.css'


const Header:FC<props> = () => {
    return(
        <header className={styles.header}>
            <p className={styles.p}>make a </p>
            <h1 className={styles.h1}>CLIQUE</h1>
        </header>
    )
}

export default Header