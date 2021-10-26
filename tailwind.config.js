module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./public/index.html',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				nunito: 'Nunito Sans, sans-serif',
			},
			colors: {
				'dmelts-dark-blue': 'hsl(209, 23%, 22%)',
				'dmbg-very-dark-blue': 'hsl(207, 26%, 17%)',
				'lmtxt-very-dark-blue': 'hsl(200, 15%, 8%)',
				'lminput-dark-gray': 'hsl(0, 0%, 52%)',
				'lmbg-very-light-gray': 'hsl(0, 0%, 98%)',
				'dmtxt-lmelts-white': '#fff',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
