import { useState } from 'react';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import '../styles/App.css';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar title='Todo Apps' />
				<h1>New Todo App</h1>
				<Form
					inputText={inputText}
					setInputText={setInputText}
					todos={todos}
					setTodos={setTodos}
				/>
				<Todo />
			</header>
		</div>
	);
}

export default App;
