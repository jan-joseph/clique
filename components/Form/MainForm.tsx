import React, { useState } from "react";
import { SetterOrUpdater } from "recoil";

import styles from "@styles/Home.module.css";

interface Props {
  inputValue: string;
  setInputValue: SetterOrUpdater<string>;
}

export default function MainForm({ inputValue, setInputValue }: Props) {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <>
      <p className={styles.p}>type your interests here</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          placeholder="cars, Sun Tzu, Vakkachan"
          className={styles.input}
          onChange={onInputChange}
        ></input>
        <button type="submit" className={styles.button}>
          GO !!
        </button>
      </form>
    </>
  );
}
