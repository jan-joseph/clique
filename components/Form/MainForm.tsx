import React, { useState } from "react";
import { writeToDb } from "@firebase/firestoreReadWrite";

import styles from "@styles/Home.module.css";
import { useRecoilValue, useSetRecoilState } from "recoil";
import profileState from "@store/index";
import { Timestamp } from "firebase/firestore";

interface profile {
	id: string;
	interests: string[];
	status: string;
	timeStamp: Object;
}
export default function MainForm() {
	const [interest, setInterest] = useState("");
	const handleChange = (value: string): void => {
		setInterest(value);
	};

	const profile: profile = useRecoilValue(profileState);
	const setProfile = useSetRecoilState(profileState);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const tempProfile = {
			...profile,
			interests: interest.split(","),
			timeStamp: Timestamp.now(),
			status: "searching",
		};
		setProfile(tempProfile);
		console.log(tempProfile);
		writeToDb(tempProfile);
	};

	return (
		<>
			<p className={styles.p}>type your interests here</p>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					placeholder="cars, Sun Tzu, Vakkachan"
					className={styles.input}
					onChange={({ target }) => handleChange(target.value)}
				></input>
				<button type="submit" className={styles.button}>
					GO !!
				</button>
			</form>
		</>
	);
}
