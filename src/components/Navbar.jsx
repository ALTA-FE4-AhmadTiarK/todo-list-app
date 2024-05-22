import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar = (props) => {
	return (
		<div className='navbar navbar-expand-lg fixed-top bg-dark text-white container-fluid justify-content-between'>
			<Link to='/'>
				<img src={logo} className='App-logo' alt='logo' />
				<i className='fa-solid fa-house my-auto ms-2 me-1'></i>
			</Link>
			<h4 className='align-items-center my-auto navbar-brand'>
				{props.title}
			</h4>
			{props.children}
			<Link to={'/detail'}>
				<button className='btn btn-danger text-decoration-none fw-bold'>
					Detail
				</button>
			</Link>
		</div>
	);
};

export default Navbar;
