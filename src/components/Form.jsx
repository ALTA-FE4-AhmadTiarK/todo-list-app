import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
	const handleInput = (e) => {
		setInputText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, inputText]);
		setInputText('');
		console.log(setInputText);
	};
	return (
		<div>
			<form className='d-flex flex-wrap'>
				<div id='add-new' className='pe-2 py-2'>
					<input
						type='text'
						onChange={handleInput}
						value={inputText}
					/>
					<button type='submit' onSubmit={handleSubmit}>
						<i className='fa-solid fa-plus'></i>
					</button>
				</div>
				<div id='search-item' className='ps-2 py-2'>
					<input type='search' name='' id='' />
					<button type='submit'>
						<i className='fa-solid fa-magnifying-glass'></i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
