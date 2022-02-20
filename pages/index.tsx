import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Head from "next/head";

import styles from "@styles/Home.module.css";
import MainForm from "@components/Form/MainForm";
import Search from "@components/Search/Search";
import profileState from "@store/index";

import { _axios } from "utilities/_axios";
import { readFromCollection } from "@firebase/firestoreReadWrite";

export const getServerSideProps = async () => {
	const res = await readFromCollection("profiles");
	const data = await res;

	if (!data) {
		return {
			data: "not-found",
		};
	}
	return {
		props: {
			data: data,
		},
	};
};

const Home: NextPage = ({ data }) => {
	const [searching, setSearching] = useState(false);
	console.log(data);

	return (
		<div className={styles.container}>
			<Head>
				<title>Clique</title>
				<meta name="talk to a stranger" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{!searching && <MainForm setSearchState={setSearching} />}
			{searching && <Search />}
		</div>
	);
};

export default Home;
