import { TodoistApi } from '@doist/todoist-api-typescript';
import React from 'react';

const api = new TodoistApi(process.env.REACT_APP_API_KEY);

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	const handleInput = (e) => {
		setInputText(e.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		api.addProject({ name: inputText })
			.then((project) => console.log(project))
			.catch((error) => console.log(error));
		return setInputText('');
	};
	return (
		<div>
			<form className='my-5'>
				<div id='add-new' className='input-group mb-3'>
					<input
						className='form-control list-do'
						type='text'
						onChange={handleInput}
						value={inputText}
						placeholder='Add New Todo'
					/>
					<button
						className='btn btn-primary'
						type='submit'
						onClick={handleSubmit}>
						<i className='fa-solid fa-plus'></i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
