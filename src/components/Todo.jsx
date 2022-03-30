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
		<div className='d-flex flex-wrap my-2 container justify-content-end'>
			<div className=''>
				<li
					className={`bg-primary text-black list-group-item ${
						todo.completed ? 'completed' : ''
					}`}>
					{text}
				</li>
			</div>
			<button onClick={completeTodo}>
				<i className='fa-solid fa-check'></i>
			</button>
			<button onClick={deleteTodo}>
				<i className='fa-solid fa-trash-can'></i>
			</button>
		</div>
	);
};

export default Todo;
