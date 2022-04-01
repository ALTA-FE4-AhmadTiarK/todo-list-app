import React from 'react';

const Todo = ({ text, todo, deleteTodo }) => {
	return (
		<div className='container justify-content-center mb-2 p-0 row'>
			<li className={`form-control list-group-item col`} id={todo.id}>
				{text}
			</li>
			<button
				type='button'
				onClick={() => {
					document
						.getElementById(`${todo.id}`)
						.classList.contains('completed')
						? document
								.getElementById(`${todo.id}`)
								.classList.remove('completed')
						: document
								.getElementById(`${todo.id}`)
								.classList.add('completed');
				}}
				className='btn btn-success col-1'>
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
