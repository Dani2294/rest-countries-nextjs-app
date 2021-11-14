import { SearchIcon } from '@heroicons/react/outline';

const Filter = ({ filterCountries, filterValue }) => {
	return (
		<div className='mb-16'>
			<form
				onSubmit={(e) => e.preventDefault()}
				className='md:flex justify-between items-center space-y-10 md:space-y-0'>
				<div className='relative flex items-center px-8 shadow-lg w-full md:w-5/12 rounded-md bg-white text-lminput-dark-gray dark:bg-dmelts-dark-blue dark:text-white'>
					<SearchIcon className='h-6 w-6 mr-2' />
					<input
						value={filterValue.input}
						onChange={(e) => filterCountries('name', e.target.value)}
						type='text'
						placeholder='Search for a country...'
						className='w-full py-5 pr-2 pl-4 text-lg placeholder-light-gray outline-none bg-transparent'
					/>
				</div>
				<div>
					<select
						value={filterValue.select}
						onChange={(e) => filterCountries('region', e.target.value)}
						className='py-5 pl-6 pr-10 text-lg text-lmtxt-very-dark-blue bg-white rounded-md shadow-lg border-none outline-none dark:bg-dmelts-dark-blue dark:text-white'>
						<option value=''>Filter by Region</option>
						<option value='africa'>Africa</option>
						<option value='americas'>Americas</option>
						<option value='asia'>Asia</option>
						<option value='europe'>Europe</option>
						<option value='oceania'>Oceania</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Filter;
