import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import { TodoistApi } from '@doist/todoist-api-typescript';
import '../styles/App.css';
import Swal from 'sweetalert2';

const api = new TodoistApi(process.env.REACT_APP_API_KEY);
const Detail = () => {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [list, setList] = useState([]);

	useEffect(() => {
		fetchData();
		document.title = 'Detail | Todo';
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

	const deleteTodo = (todo) => {
		api.deleteProject(todo.id)
			.then(() =>
				Swal.fire({
					text: `You have deleted "${todo.name}"`,
					icon: 'warning',
					confirmButtonColor: '#d33',
					confirmButtonText: 'Yes, delete it!',
				})
			)
			.catch((error) => console.log(error))
			.finally(() => fetchData());
	};

	return (
		<div>
			<Navbar title='Detail Todo' btnText='Home' />
			<Layout>
				<h2 className='text-center my-5'>Check Your To-Do List Here</h2>
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
									deleteTodo={deleteTodo}
									setList={setList}
									todos={todos}
									todo={todo}
									key={todo.id}
									text={todo.name}
								/>
							))}
						</ul>
						<p className='container mx-2 text-muted'>
							You can add up to<strong> 8</strong> tasks.
							<br />
							<em>
								If you want to add more, you have to delete your
								previous created task above.
							</em>
						</p>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export default Detail;
