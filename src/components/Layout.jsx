import React from 'react';

const Layout = (props) => {
	return (
		<div className='layout'>
			<div className='container my-5'>{props.children}</div>
		</div>
	);
};

export default Layout;
