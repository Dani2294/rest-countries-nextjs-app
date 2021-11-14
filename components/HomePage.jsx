import Container from './Container';
import { useState } from 'react';
import Card from './Card';
import Filter from './Filter';

const HomePage = ({ countries }) => {
	const [results, setResults] = useState(countries);
	const [filterValue, setFilterValue] = useState({ input: '', select: '' });

	const filterCountries = (type, value) => {
		if (type === 'name') {
			setFilterValue({
				input: value,
				select: '',
			});
			const filteredCountries = countries.filter((country) =>
				country.name.toLowerCase().includes(value.toLowerCase())
			);
			setResults(filteredCountries);
		} else if (type === 'region') {
			setFilterValue({
				input: '',
				select: value,
			});
			const filteredByRegion = countries.filter((country) =>
				value !== ''
					? country.region.toLowerCase() === value.toLowerCase()
					: true
			);
			setResults(filteredByRegion);
		} else {
			setFilterValue({
				input: '',
				select: '',
			});
		}
	};

	return (
		<main className='bg-lmbg-very-light-gray py-16 dark:bg-dmbg-very-dark-blue dark:text-white min-h-screen'>
			<Container>
				<Filter filterCountries={filterCountries} filterValue={filterValue} />
				<div className='grid grid-cont gap-14 lg:gap-18'>
					{results.map((country, idx) => (
						<Card key={`${country.alpha3Code}-${idx}`} country={country} />
					))}
				</div>
			</Container>
		</main>
	);
};

export default HomePage;
