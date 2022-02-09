import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Timestamp } from "firebase/firestore";

import styles from "@styles/Home.module.css";
import profileState from "@store/index";
import { _axios } from "utilities/_axios";

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

	const handleSubmit: Promise<void> = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const tempProfile: profile = {
			...profile,
			interests: interest.split(","),
			timeStamp: Timestamp.now(),
			status: "searching",
		};
		setProfile(tempProfile);
		// Writing the new Profile Data to DB
		_axios({
			method: "post",
			url: "api/profile",
			data: tempProfile,
			onSuccess: (res) => {
				console.log(res);
			},
			onError: (err) => {
				console.log(err);
			},
		});
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
