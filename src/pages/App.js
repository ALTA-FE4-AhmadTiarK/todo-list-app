import { useState } from 'react';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';
import '../styles/App.css';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	return (
		<div className='App'>
			<Navbar title='Todo Apps' />
			<Layout>
				<Form
					inputText={inputText}
					setInputText={setInputText}
					todos={todos}
					setTodos={setTodos}
				/>
				<TodoList setTodos={setTodos} todos={todos} />
			</Layout>
		</div>
	);
}

export default App;
