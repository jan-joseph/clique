import type { AppProps } from "next/app";
import { RecoilRoot, atom, RecoilState } from "recoil";
import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</Layout>
	);
}

export default MyApp;
