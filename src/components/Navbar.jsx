import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = (props) => {
	return (
		<div className='navbar navbar-expand-lg fixed-top bg-dark text-white container-fluid '>
			<img src={logo} className='App-logo' alt='logo' />
			<h4 className='align-items-center my-auto'>{props.title}</h4>
			{props.children}
		</div>
	);
};

export default Navbar;
