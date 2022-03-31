import React from 'react';

const Todo = ({ text, todo, completeTodo, deleteTodo }) => {
	// const completeTodo = () => {
	// 	setTodos(
	// todos.map((item) => {
	// 	if (item.id === todo.id) {
	// 		return { ...item, completed: !item.completed };
	// 	}
	// 	return item;
	// 		})
	// 	);
	// };

	return (
		<div className='container justify-content-center mb-2 p-0 row'>
			<li
				color={todo.color}
				className={`form-control list-group-item col ${
					todo.completed ? 'completed' : ''
				}`}>
				{text}
			</li>
			<button
				className='btn btn-success col-1'
				onClick={() => completeTodo(todo)}>
				<i className='fa-solid fa-check'></i>
			</button>
			<button
				className='btn btn-danger col-1'
				onClick={() => deleteTodo(todo)}>
				<i className='fa-solid fa-trash-can'></i>
			</button>
		</div>
	);
};

export default Todo;
