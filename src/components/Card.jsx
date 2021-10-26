import Image from 'next/image';
import Link from 'next/link';

const Card = ({ country }) => {
	return (
		<div className='shadow-xl rounded transform sm:hover:scale-105 sm:active:scale-100 transition duration-300'>
			<Link href='/country/[id]' as={`/country/${country.alpha3Code}`}>
				<a>
					<Image
						className='w-full h-full'
						src={country.flag}
						alt={country.name}
						width={265}
						height={160}
						layout='responsive'
						objectFit='cover'
					/>
					<div className='bg-dmtxt-lmelts-white p-7 space-y-3 text-lmtxt-very-dark-blue dark:bg-dmelts-dark-blue dark:text-dmtxt-lmelts-white card-info'>
						<h3 className='font-bold text-2xl truncate'>{country.name}</h3>
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
								Capital:{' '}
							</strong>
							{country.capital}
						</p>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Card;
