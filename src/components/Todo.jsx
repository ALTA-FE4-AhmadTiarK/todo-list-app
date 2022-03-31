import React, { useEffect } from 'react';
import { isSuccess, TodoistApi } from '@doist/todoist-api-typescript';

const api = new TodoistApi(process.env.REACT_APP_API_KEY);

const Todo = ({ text, todo, todos, setTodos, fetchData }) => {
	const deleteTodo = async (e) => {
		api.deleteProject(todo.id)
			.then((isSuccess) => console.log(isSuccess))
			.catch((error) => console.log(error))
			.finally(() => fetchData());
	};

	// odd

	// console.log(setRemoveTodo);
	// setTodos(todos.filter((item) => item.id !== todo.id));

	const completeTodo = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	return (
		<div className='d-flex flex-wrap container justify-content-center mb-2'>
			<div className=''>
				<li
					className={`list-do form-control list-group-item ${
						todo.completed ? 'completed' : ''
					}`}>
					{text}
				</li>
			</div>
			<button className='btn btn-success' onClick={completeTodo}>
				<i className='fa-solid fa-check'></i>
			</button>
			<button className='btn btn-danger' onClick={deleteTodo}>
				<i className='fa-solid fa-trash-can'></i>
			</button>
		</div>
	);
};

export default Todo;
