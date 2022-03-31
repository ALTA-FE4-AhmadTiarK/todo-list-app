import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { TodoistApi } from '@doist/todoist-api-typescript';

const api = new TodoistApi(process.env.REACT_APP_API_KEY);
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

	// masih belum bisa complete
	const completeTodo = (todo) => {
		api.closeTask(todo.id)
			.then((isSuccess) => console.log(isSuccess))
			.catch((error) => console.log(error));
	};

	const deleteTodo = (todo) => {
		api.deleteProject(todo.id)
			.then(() => alert(`You have deleted "${todo.name}"`))
			.catch((error) => console.log(error))
			.finally(() => fetchData());
	};

	return (
		<div>
			<Navbar title='Detail Todo' btnText='Home' />
			<Layout>
				<h1 className='text-center my-5'>Your To-Do</h1>
				<div className='card'>
					<div className='card-header bg-danger text-white rounded-3 container'>
						Search Task
					</div>
					<div className='card-body container'>
						<div className='px-4 row'>
							<input
								className='form-control list-group-item col'
								type='search'
							/>
							<button
								type='submit'
								className='btn btn-primary col-2'>
								<i className='fa-solid fa-search'></i>
							</button>
						</div>
					</div>
				</div>

				<div className='card mt-3'>
					<div className='card-header bg-danger text-white rounded-3 container'>
						Task List
					</div>
					<div className='card-body'>
						<ul className='position-relative mb-5'>
							{list.map((todo) => (
								<Todo
									completeTodo={completeTodo}
									deleteTodo={deleteTodo}
									setList={setList}
									todos={todos}
									todo={todo}
									key={todo.id}
									text={todo.name}
								/>
							))}
						</ul>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Detail;
