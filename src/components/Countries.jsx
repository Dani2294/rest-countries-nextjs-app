import React, { useState, useEffect } from 'react';
import { useAppContext } from '../contexts/filter.context';
import Card from './Card';

const Countries = ({ countries }) => {
	const [results, setResults] = useState(countries);
	const { state } = useAppContext();

	useEffect(() => {
		function filterCountries() {
			const { filterVal: val } = state;
			const filteredCountries = countries.filter((country) =>
				country.name.toLowerCase().includes(val.toLowerCase())
			);
			setResults(filteredCountries);
		}

		function filterCountriesByRegion() {
			const { filterVal: val } = state;
			const filteredCountries = countries.filter((country) =>
				val !== '' ? country.region.toLowerCase() === val.toLowerCase() : true
			);
			setResults(filteredCountries);
		}

		state.type === 'name' ? filterCountries() : filterCountriesByRegion();
	}, [state.filterVal]);

	return (
		<main className='py-14 px-4 pt-10 dark:bg-dmbg-very-dark-blue min-h-screen'>
			<div className='grid grid-cont gap-14 container mx-auto'>
				{results.map((country, idx) => (
					<Card key={`${country.name}-${idx}`} country={country} />
				))}
			</div>
		</main>
	);
};

export default Countries;
