import React, { useState } from 'react';
import { writeToDb } from '@firebase/fireStore';

import styles from '@styles/Home.module.css';

export default function MainForm() {
  const [interest, setInterest] = useState('');
  const handleChange = (value: string): void => {
    setInterest(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(interest);
    writeToDb(interest);
  };

  return (
    <>
      <p className={styles.p}>type your interests here</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          placeholder='cars, Sun Tzu, Vakkachan'
          className={styles.input}
          onChange={({ target }) => handleChange(target.value)}
        ></input>
        <button type='submit' className={styles.button}>
          GO !!
        </button>
      </form>
    </>
  );
}
