import Link from 'next/link';
import Image from 'next/image';

const Card = ({ country }) => {
	return (
		<div className='shadow-lg rounded-md overflow-hidden bg-white dark:bg-dmelts-dark-blue transform hover:scale-105 transition'>
			<Link href={`/country/[id]`} as={`/country/${country.alpha3Code}`}>
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
					{/* <img
						src={country.flag}
						alt={country.name}
						className='w-full h-52 lg:h-40 object-cover'
					/> */}
					<div className='px-6 pt-8 pb-10 text-lmtxt-very-dark-blue dark:text-white'>
						<h2 className='font-bold text-2xl lg:text-xl mb-4'>
							{country.name}
						</h2>
						<div className='space-y-1'>
							<p className='font-semibold'>
								Population:
								<span className='text-lminput-dark-gray font-normal ml-1 dark:text-white'>
									{country.population}
								</span>
							</p>
							<p className='font-semibold'>
								Region:
								<span className='text-lminput-dark-gray font-normal ml-1 dark:text-white'>
									{country.region}
								</span>
							</p>
							<p className='font-semibold'>
								Capital:
								<span className='text-lminput-dark-gray font-normal ml-1 dark:text-white'>
									{country.capital}
								</span>
							</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Card;
