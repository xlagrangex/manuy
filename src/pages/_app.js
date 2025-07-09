import Head from "next/head";
import "../styles/globals.scss";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.png" sizes="170x186" />
				<title>Manyu</title>

				<meta property="og:title" content="Manyu" />
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Manyu" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
