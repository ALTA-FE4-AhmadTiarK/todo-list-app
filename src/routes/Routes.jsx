import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import App from '../pages/App';

function Routing() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/detail' element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
