import React, { useState } from 'react';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

const Detail = () => {
	return (
		<div>
			<Navbar title='Detail Todo' btnText='Home' />
			<Layout>
				<h1 className='text-center my-5'>Detail To-Do</h1>
				<div className='card'>
					<div className='card-header'>Task List</div>
				</div>
			</Layout>
		</div>
	);
};

export default Detail;
