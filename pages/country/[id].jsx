import Header from '../../src/components/Header';
import Details from '../../src/components/Details';
import { useAppContext } from '../../src/contexts/filter.context';

const Country = ({ country, borders }) => {
	const { dark, handleDarkMode } = useAppContext();
	return (
		<div className={dark && 'dark'}>
			<Header isDark={dark} handleDarkMode={handleDarkMode} />
			<section className='px-4 py-14 dark:bg-dmbg-very-dark-blue min-h-screen'>
				<div className='container mx-auto'>
					<Details country={country} borders={borders} isDark={dark} />
				</div>
			</section>
		</div>
	);
};

export default Country;

export async function getStaticPaths() {
	const res = await fetch('https://restcountries.com/v2/all');
	const countries = await res.json();
	const paths = countries.map((country) => ({
		params: {
			id: country.alpha3Code,
		},
	}));
	return {
		paths,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }) {
	let countryBordersArr = [];
	const res = await fetch(
		`https://restcountries.com/v2/alpha/${params.id}?fields=flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`
	);
	const country = await res.json();

	if (country.borders && country.borders.length > 0) {
		const countryBorders = country.borders.join(',');
		const countryBordersRes = await fetch(
			`https://restcountries.com/v2/alpha?codes=${countryBorders}&fields=name`
		);
		const countryBordersData = await countryBordersRes.json();
		countryBordersArr = countryBordersData.map((country) => country.name);
	}
	return {
		props: {
			country,
			borders: countryBordersArr,
		},
	};
}
