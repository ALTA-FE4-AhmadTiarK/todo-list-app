import React from 'react';
import Todo from './Todo';

export default function TodoList({
	todos,
	setRemoveTodo,
	setList,
	completeTodo,
	deleteTodo,
}) {
	return (
		<>
			<ul className='position-relative mb-5 p-0'>
				{todos.map((todo) => (
					<Todo
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
						setList={setList}
						setRemoveTodo={setRemoveTodo}
						todos={todos}
						todo={todo}
						key={todo.id}
						text={todo.text}
					/>
				))}
			</ul>
		</>
	);
}
