import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import Container from './Container';
import { useAppContext } from '../app.context';

const NavBar = () => {
	const { dark, handleDarkMode } = useAppContext();
	return (
		<header className='shadow-lg z-10 bg-white text-lmtxt-very-dark-blue dark:bg-dmelts-dark-blue dark:text-dmtxt-lmelts-white'>
			<Container>
				<div className='flex justify-between items-center py-8'>
					<h1 className='font-bold text-lg xl:text-xl'>
						<Link href='/'>
							<a>Where in the world?</a>
						</Link>
					</h1>
					<div
						onClick={() => handleDarkMode()}
						className='flex items-center font-semibold cursor-pointer'>
						{dark ? (
							<>
								<SunIcon className='h-6 w-6 mr-2 flex-none' /> Light Mode
							</>
						) : (
							<>
								<MoonIcon className='h-6 w-6 mr-2 flex-none' /> Dark Mode
							</>
						)}
					</div>
				</div>
			</Container>
		</header>
	);
};

export default NavBar;
