import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, setTodos, setRemoveTodo, setList }) {
	return (
		<div className=''>
			<ul className='list-group position-relative mb-5'>
				{todos.map((todo) => (
					<Todo
						setList={setList}
						setRemoveTodo={setRemoveTodo}
						setTodos={setTodos}
						todos={todos}
						todo={todo}
						key={todo.id}
						text={todo.text}
					/>
				))}
			</ul>
		</div>
	);
}
