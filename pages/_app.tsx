import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../components/Layout/Layout";

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
