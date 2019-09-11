import React, {useState, useEffect} from 'react';

import {UseLocalStorage} from './UseLocalStorage.js';

export const UseDarkMode = () => {
	const [darkMode, setDarkMode] = UseLocalStorage('false'); 

	useEffect( () => {
		if (darkMode){
			const body = document.querySelector('body');
			body.className.add('dark-mode');

		}else { 
			const body = document.querySelector('body');
			body.className.remove('dark-mode');
		}

	}, [darkMode, storedValue, setValue] );

}




