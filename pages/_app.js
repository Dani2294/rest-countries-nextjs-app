import 'tailwindcss/tailwind.css';
import '../src/styles/globals.css';
import { AppWrapper } from '../src/contexts/filter.context';

function MyApp({ Component, pageProps }) {
	return (
		<AppWrapper>
			<Component {...pageProps} />
		</AppWrapper>
	);
}

export default MyApp;
