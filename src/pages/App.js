import axios from 'axios';
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

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await axios
			.get(
				`https://api.todoist.com/rest/v1/projects?Authorization=Bearer&token=${process.env.REACT_APP_API_KEY}`
			)
			.then((response) => {
				console.log(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='App'>
			<Navbar title='Todo Apps' btnText='Detail' />
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

export default withRouter(App);
