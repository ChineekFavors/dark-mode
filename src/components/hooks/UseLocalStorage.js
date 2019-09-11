import React, {useState} from 'react';


export const UseLocalStorage = (key, initialValue) => {

	const [storedValue, setStoredValue] = useState(() =>{
		const item = window.localStorage.getItem(key);

		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = value => {
		setStoredBalue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
}

