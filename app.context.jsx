import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
	/* Dark Mode */
	const [dark, setDark] = useState(false);
	const handleDarkMode = () => {
		setDark(!dark);
	};

	return (
		<AppContext.Provider value={{ dark, handleDarkMode }}>
			{children}
		</AppContext.Provider>
	);
};

export function useAppContext() {
	return useContext(AppContext);
}
