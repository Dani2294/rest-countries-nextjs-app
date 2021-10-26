import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

const Details = ({ country, borders }) => {
	return (
		<div>
			<Link href='/'>
				<a className='flex items-center justify-center rounded py-3 text-lg shadow-xl text-lmtxt-very-dark-blue w-36 bg-dmtxt-lmelts-white transform active:scale-95 transition dark:bg-dmelts-dark-blue dark:text-dmtxt-lmelts-white'>
					<ArrowNarrowLeftIcon className='w-5 text-lmtxt-very-dark-blue left-arrow dark:text-dmtxt-lmelts-white' />
					Back
				</a>
			</Link>
			<div className='mt-28 space-y-14 lg:flex justify-between lg:space-y-0'>
				<div className='w-full flex-initial mr-10'>
					<Image
						src={country.flag}
						alt={country.name}
						width='100%'
						height='50%'
						layout='responsive'
						objectFit='contain'
					/>
				</div>
				<div className='space-y-10 dark:text-dmtxt-lmelts-white'>
					<h1 className='font-bold text-2xl'>{country.name}</h1>
					<div className='sm:flex justify-between space-y-10 sm:space-y-0'>
						<div className='space-y-4'>
							<p className='text-lminput-dark-gray dark:text-dmtxt-lmelts-white'>
								<strong className='text-lmtxt-very-dark-blue dark:text-dmtxt-lmelts-white'>
									Native Name:{' '}
								</strong>
								{country.nativeName}
							</p>
							<p className='text-lminput-dark-gray dark:text-dmtxt-lmelts-white'>
								<strong className='text-lmtxt-very-dark-blue dark:text-dmtxt-lmelts-white'>
									Population:{' '}
								</strong>
								{country.population}
							</p>
							<p className='text-lminput-dark-gray dark:text-dmtxt-lmelts-white'>
								<strong className='text-lmtxt-very-dark-blue dark:text-dmtxt-lmelts-white'>
									Region:{' '}
								</strong>
								{country.region}
							</p>
							<p className='text-lminput-dark-gray dark:text-dmtxt-lmelts-white'>
								<strong className='text-lmtxt-very-dark-blue dark:text-dmtxt-lmelts-white'>
									Sub Region:{' '}
								</strong>
								{country.subregion}
							</p>
							<p className='text-lminput-dark-gray dark:text-dmtxt-lmelts-white'>
								<strong className='text-lmtxt-very-dark-blue dark:text-dmtxt-lmelts-white'>
									Capital:{' '}
								</strong>
								{country.capital}
							</p>
						</div>
						<div className='space-y-4'>
							<p className='text-lminput-dark-gray dark:text-dmtxt-lmelts-white'>
								<strong className='text-lmtxt-very-dark-blue dark:text-dmtxt-lmelts-white'>
									Top Level Domain:{' '}
								</strong>
								{country.topLevelDomain}
							</p>
							<p className='text-lminput-dark-gray dark:text-dmtxt-lmelts-white'>
								<strong className='text-lmtxt-very-dark-blue dark:text-dmtxt-lmelts-white'>
									Currencies:{' '}
								</strong>
								{country.currencies.map((currency) => currency.name).join(', ')}
							</p>
							<p className='text-lminput-dark-gray dark:text-dmtxt-lmelts-white'>
								<strong className='text-lmtxt-very-dark-blue dark:text-dmtxt-lmelts-white'>
									Languages:{' '}
								</strong>
								{country.languages.map((language) => language.name).join(', ')}
							</p>
						</div>
					</div>
					<div className='sm:flex items-center'>
						<p className='mb-4 sm:mb-0'>
							<strong>Border Countries: </strong>
						</p>
						<ul className='text-lmtxt-very-dark-blue'>
							{borders.length > 0 ? (
								borders.map((border, idx) => (
									<li
										key={`${border}-${idx}`}
										className='inline-block bg-dmtxt-lmelts-white py-2 px-6 shadow-md rounded m-2 dark:bg-dmelts-dark-blue dark:text-dmtxt-lmelts-white'>
										{border}
									</li>
								))
							) : (
								<li className='inline-block bg-dmtxt-lmelts-white py-2 px-6 shadow-md rounded m-2'>
									No Border Countries
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
