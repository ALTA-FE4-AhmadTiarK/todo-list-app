import { useEffect, useState } from 'react';
import Form from '../components/Form';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';
import '../styles/App.css';
import { withRouter } from '../utils/navigation';

function App() {
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	document.title = 'Todo | Home';

	return (
		<div className='App'>
			<Navbar title='Todo Apps' btnText='Detail' />
			<Layout>
				<h3 className='my-5'>
					Type something to add to your todo list
				</h3>
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

export default withRouter(App);
