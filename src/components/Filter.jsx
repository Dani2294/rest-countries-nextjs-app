import { useRef, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { useAppContext } from '../contexts/filter.context';

const Filter = ({ isDark }) => {
	const { state, setState } = useAppContext();
	const inptRef = useRef(null);
	const selectRef = useRef(null);

	useEffect(() => {
		if (state.type === 'name' && state.filterVal !== '') {
			inptRef.current.value = state.filterVal;
		}
		if (state.type === 'region' && state.filterVal !== '') {
			inptRef.current.value = state.filterVal;
		}
	}, []);

	return (
		<section className={`py-14 px-4 dark:bg-dmbg-very-dark-blue`}>
			<form
				className='container mx-auto md:flex md:justify-between md:items-center space-y-8 md:space-y-0'
				onSubmit={(e) => e.preventDefault()}>
				<div className='relative'>
					<input
						ref={inptRef}
						onChange={(e) =>
							setState({ filterVal: e.target.value, type: 'name' })
						}
						type='text'
						placeholder='Search for a country...'
						className={`shadow-lg w-full md:w-96 p-6 pl-20 text-lg font-semibold text-lminput-dark-gray placeholder-lminput-dark-gray rounded-md outline-none focus:ring ring-offset-2 ring-lminput-dark-gray dark:bg-dmelts-dark-blue dark:text-dmtxt-lmelts-white dark:placeholder-dmtxt-lmelts-white`}
					/>
					<SearchIcon
						className={`absolute top-5 left-6 h-8 w-8 text-lminput-dark-gray dark:bg-dmelts-dark-blue dark:text-dmtxt-lmelts-white dark:placeholder-dmtxt-lmelts-white`}
					/>
				</div>
				<div>
					<select
						ref={selectRef}
						onChange={(e) =>
							setState({ filterVal: e.target.value, type: 'region' })
						}
						className={`shadow-lg py-6 px-8 text-lg font-semibold text-lminput-dark-gray bg-white rounded-md outline-none focus:ring ring-offset-2 ring-lminput-dark-gray dark:bg-dmelts-dark-blue dark:text-dmtxt-lmelts-white`}>
						<option value=''>Filter by Region</option>
						<option value='africa'>Africa</option>
						<option value='americas'>Americas</option>
						<option value='asia'>Asia</option>
						<option value='europe'>Europe</option>
						<option value='oceania'>Oceania</option>
					</select>
				</div>
			</form>
		</section>
	);
};

export default Filter;
