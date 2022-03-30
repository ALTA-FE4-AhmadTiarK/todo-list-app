import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	const handleInput = (e) => {
		setInputText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText('');
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
						placeholder='Add new todo'
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
