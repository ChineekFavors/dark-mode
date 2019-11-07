import React, {useState, useEffect} from 'react';

import {useLocalStorage} from './useLocalStorage.js';

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage('darkmode'); 
	
	
	

	useEffect( () => {
		if (darkMode){
			let body = document.querySelector('body');
			body.classList.toggle('dark-mode');
			
			  	
		} 
		

		
		
		

	}, [darkMode]);
	

	return [darkMode, setDarkMode];

}




