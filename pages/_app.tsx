import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { Provider } from 'react-redux';

import store from '../redux';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<NextNProgress color="#6d28d9" height={4} />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
