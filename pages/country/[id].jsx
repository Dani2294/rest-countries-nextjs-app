import Container from '../../components/Container';
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import { useAppContext } from '../../app.context';

const CountryDetails = ({ country, borders }) => {
	const { dark } = useAppContext();
	return (
		<div className={dark ? 'dark' : ''}>
			<NavBar />
			<main className='bg-lmbg-very-light-gray pt-12 pb-8 dark:bg-dmbg-very-dark-blue dark:text-white min-h-screen'>
				<Container>
					<Link href='/'>
						<a className='flex text-center items-center shadow-xl rounded-md w-32 px-6 py-3 bg-white text-xl cursor-pointer dark:bg-dmelts-dark-blue dark:text-white'>
							<ArrowNarrowLeftIcon className='h-6 mr-3 inline-block' />
							Back
						</a>
					</Link>
					<div className='lg:flex gap-20'>
						<div className='w-full lg:w-1/2 flex-initial'>
							<Image
								src={country.flag}
								alt={country.name}
								width='100%'
								height='100%'
								layout='responsive'
								objectFit='contain'
							/>
						</div>
						<div className='mt-10 xl:mt-20 text-lmtxt-very-dark-blue dark:text-white'>
							<h2 className='font-bold text-2xl mb-7 lg:text-4xl'>
								{country.name}
							</h2>
							<div className='md:flex space-y-8 md:space-y-0'>
								<div className='space-y-3 lg:mr-10'>
									<p className='font-semibold'>
										Native Name:
										<span className='font-normal ml-2'>
											{country.nativeName}
										</span>
									</p>
									<p className='font-semibold'>
										Population:
										<span className='font-normal ml-2'>
											{country.population}
										</span>
									</p>
									<p className='font-semibold'>
										Region:
										<span className='font-normal ml-2'>{country.region}</span>
									</p>
									<p className='font-semibold'>
										Sub Region:
										<span className='font-normal ml-2'>
											{country.subregion}
										</span>
									</p>
									<p className='font-semibold'>
										Capital:
										<span className='font-normal ml-2'>{country.capital}</span>
									</p>
								</div>
								<div className='space-y-3 md:ml-10 lg:ml-0'>
									<p className='font-semibold'>
										Top Level Domain:
										<span className='font-normal ml-2'>
											{country.topLevelDomain}
										</span>
									</p>
									<p className='font-semibold'>
										Currencies:
										<span className='font-normal ml-2'>
											{country.currencies && country.currencies[0].name}
										</span>
									</p>
									<p className='font-semibold'>
										Languages:
										<span className='font-normal ml-2'>
											{country.languages &&
												country.languages.map((lang) => lang.name + ', ')}
										</span>
									</p>
								</div>
							</div>
							<div className='mt-8 md:flex items-center lg:mt-20'>
								<p className='font-semibold text-lg lg:w-1/2'>
									Border Countries:
								</p>
								<ul>
									{borders ? (
										borders.map((border, idx) => (
											<Link
												href={`/country/${border.alpha3Code}`}
												key={`${border}-${idx}`}>
												<a className='inline-block bg-white py-1 px-5 m-1 shadow-md rounded text-sm dark:bg-dmelts-dark-blue'>
													{border.name}
												</a>
											</Link>
										))
									) : (
										<span>No Border Countries</span>
									)}
								</ul>
							</div>
						</div>
					</div>
				</Container>
			</main>
		</div>
	);
};

export default CountryDetails;

export const getStaticPaths = async () => {
	const res = await fetch('https://restcountries.com/v2/all');
	const data = await res.json();
	const paths = data.map((country) => {
		return {
			params: { id: country.alpha3Code },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(
		`https://restcountries.com/v2/alpha/${id}?fields=flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders`
	);
	const data = await res.json();

	let borders = [];
	if (data.borders && data.borders.length > 0) {
		const countryBorders = data.borders.join(',');
		const countryBordersFetch = await fetch(
			`https://restcountries.com/v2/alpha?codes=${countryBorders}&fields=name,alpha3Code`
		);
		const countryBordersData = await countryBordersFetch.json();
		borders = countryBordersData.map((country) => {
			return {
				name: country.name,
				alpha3Code: country.alpha3Code,
			};
		});
	}

	return {
		props: {
			country: data,
			borders,
		},
	};
};
