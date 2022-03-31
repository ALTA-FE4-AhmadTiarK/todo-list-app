import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';

const Detail = () => {
	const [todos, setTodos] = useState([]);
	const [list, setList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await axios
			.get(
				`https://api.todoist.com/rest/v1/projects?Authorization=Bearer&token=${process.env.REACT_APP_API_KEY}`
			)
			.then((response) => {
				setList(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	// console.log(list);
	return (
		<div>
			<Navbar title='Detail Todo' btnText='Home' />
			<Layout>
				<h1 className='text-center my-5'>Detail To-Do</h1>
				<div className='card'>
					<div className='card-header bg-danger text-white rounded-3 container'>
						Task List
					</div>
					<div className='card-body'>
						<ul className='list-group position-relative mb-5'>
							{list.map((todo) => (
								<Todo
									setList={setList}
									setTodos={setTodos}
									todos={todos}
									todo={todo}
									key={todo.id}
									text={todo.name}
								/>
							))}
						</ul>
					</div>
				</div>

				{/* ini modelnya dibuat seperti ini */}
				{/* <div className='card'>
					{list.map((item) => {
						return (
							<div className='card-body' key={item.id}>
								<h3 className='card-title'>{item.name}</h3>
							</div>
						);
					})}
				</div> */}
			</Layout>
		</div>
	);
};

export default Detail;
