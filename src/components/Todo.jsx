import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
	const deleteTodo = () => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

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
