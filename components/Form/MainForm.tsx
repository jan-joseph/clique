import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Timestamp } from "firebase/firestore";
import Axios from "axios";

import styles from "@styles/Home.module.css";
import profileState from "@store/index";
import axios from "axios";

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const tempProfile = {
			...profile,
			interests: interest.split(","),
			timeStamp: Timestamp.now(),
			status: "searching",
		};
		setProfile(tempProfile);
		try {
			const response = await axios.post("/api/interests", tempProfile);
			console.log(reponse);
		} catch (error) {
			console.log(error);
		}
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
