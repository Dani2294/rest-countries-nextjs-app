import Head from 'next/head';
import HomePage from '../components/HomePage';
import NavBar from '../components/NavBar';
import { useAppContext } from '../app.context';

export default function Home({ countries }) {
	const { dark } = useAppContext();

	return (
		<div className={`${dark ? 'dark' : ''} font-nunito`}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<NavBar />
			<HomePage countries={countries} />
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch(
		'https://restcountries.com/v2/all?fields=flag,name,region,population,capital,alpha3Code'
	);
	const data = await res.json();

	return {
		props: {
			countries: data,
		},
	};
};
