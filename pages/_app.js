import 'tailwindcss/tailwind.css';
import { AppWrapper } from '../app.context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	);
}

export default MyApp;
