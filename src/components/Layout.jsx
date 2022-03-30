import React from 'react';

const Layout = (props) => {
	return (
		<div className='layout'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
