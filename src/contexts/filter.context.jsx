import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
	const [state, setState] = useState({
		filterVal: '',
		type: '',
	});

	/* ====================================================== */
	/* EXCEPTIONNALY I PUT IT HERE BECAUSE I'M LAZY LOL */
	const [dark, setDark] = useState(false);

	const handleDarkMode = () => {
		setDark(!dark);
		localStorage.setItem('darkMode', !dark);
	};

	useEffect(() => {
		setDark(localStorage.getItem('darkMode'));
	}, []);

	return (
		<AppContext.Provider
			value={{ state, setState, dark, setDark, handleDarkMode }}>
			{children}
		</AppContext.Provider>
	);
	/* ====================================================== */
}

export function useAppContext() {
	return useContext(AppContext);
}
