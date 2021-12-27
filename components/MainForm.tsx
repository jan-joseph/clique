import React, { useState, FC } from "react";
import { getDatabase } from "firebase/database";

import app from "../firebase";
import styles from "../styles/Home.module.css";

const MainForm: FC<props> = ({ inputValue, setInputValue }) => {
	console.log(getDatabase(app));

	const onInputChange = (e: Event): void => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e: Event): void => {
		e.preventDefault();
		console.log(inputValue);
		console.log("submitted");
	};

	return (
		<>
			<main className={styles.main}>
				<p className={styles.p}>type your interests here</p>
				<form className={styles.form}>
					<input
						placeholder="cars, Sun Tzu, Vakkachan"
						className={styles.input}
						onChange={onInputChange}
					></input>
					<button
						type="submit"
						className={styles.button}
						onClick={handleSubmit}
					>
						GO !!
					</button>
				</form>
			</main>
		</>
	);
};

export default MainForm;
