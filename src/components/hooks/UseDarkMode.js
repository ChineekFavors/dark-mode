import React, {useState, useEffect} from 'react';

import {useLocalStorage} from './useLocalStorage.js';

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage('darkmode'); 
		console.log('useDarkMode.js:darkMode', darkMode)
	
	useEffect( () => {
		if (darkMode){
			let body = document.querySelector('body');
			body.classList.add('dark-mode');
			
			
				  	
		} else{
			let body = document.querySelector('body');
			body.classList.remove('dark-mode');
		}
		


	}, [darkMode]);
	

	return [darkMode, setDarkMode];

}




