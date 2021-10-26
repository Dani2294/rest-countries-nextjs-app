import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';

const Header = ({ isDark, handleDarkMode }) => {
	return (
		<header className='py-8 xl:py-10 px-4 bg-white shadow-lg text-lmtxt-very-dark-blue dark:bg-dmelts-dark-blue dark:text-dmtxt-lmelts-white dark:placeholder-dmtxt-lmelts-white'>
			<nav className='container mx-auto flex justify-between items-center'>
				<h1 className='text-xl xl:text-4xl font-bold'>
					<Link href='/'>Where in the world ?</Link>
				</h1>
				<div
					onClick={() => handleDarkMode()}
					className='flex items-center text-md xl:text-lg font-semibold cursor-pointer'>
					{isDark ? (
						<>
							<SunIcon className='h-5 w-5 mr-2 xl:h-6 xl:w-6 flex-none' /> Light
							Mode
						</>
					) : (
						<>
							<MoonIcon className='h-5 w-5 mr-2 xl:h-6 xl:w-6 flex-none' /> Dark
							Mode
						</>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
