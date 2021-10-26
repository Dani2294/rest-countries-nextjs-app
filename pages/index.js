import { useState, useEffect } from 'react';
import Head from 'next/head';
import Countries from '../src/components/Countries';
import Filter from '../src/components/Filter';
import Header from '../src/components/Header';
import { useAppContext } from '../src/contexts/filter.context';

export default function Home({ countries }) {
	const { dark, handleDarkMode } = useAppContext();

	return (
		<div className={dark && 'dark'}>
			<Head>
				<title>REST Countries Api</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				<link
					href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Header isDark={dark} handleDarkMode={handleDarkMode} />
			<Filter />
			<Countries countries={countries} />
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		'https://restcountries.com/v2/all?fields=flag,name,region,population,capital,alpha3Code'
	);
	const countries = await res.json();
	return {
		props: {
			countries,
		},
	};
}
