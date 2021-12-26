import React, {useState} from 'react'

import styles from '../styles/Home.module.css'

export default function MainForm() {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e:Event):void => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e:Event):void => {
        console.log('submitted');
    }

    return (
        <>
            <main className={styles.main}>
                <p className={styles.p}>type your interests here</p>
                <form className={styles.form}>
                <input placeholder="cars, Sun Tzu, Vakkachan" className={styles.input} onChange={onInputChange}></input>
                <button type='submit' className={styles.button} onClick={handleSubmit}>GO !!</button>
                </form>
            </main>
        </>
    )
}
