import { TodoistApi } from '@doist/todoist-api-typescript';
import React from 'react';
import Swal from 'sweetalert2';

const api = new TodoistApi(process.env.REACT_APP_API_KEY);

const Form = ({ inputText, setInputText }) => {
	const handleInput = (e) => {
		setInputText(e.target.value);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		api.addProject({ name: inputText })
			.then((project) => {
				Swal.fire({
					icon: 'success',
					title: `You have added "${project.name}"`,
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.catch((error) =>
				Swal.fire({
					text: `Please check the detail page, You can add up to 8 tasks`,
					icon: 'warning',
					confirmButtonColor: '#001eff',
					confirmButtonText: 'Close',
				})
			);
		return setInputText('');
	};
	return (
		<div>
			<form className='my-5'>
				<div id='add-new' className='input-group mb-3'>
					<input
						className='form-control px-4 row'
						type='text'
						onChange={handleInput}
						value={inputText}
						placeholder='Add New Todo'
					/>
					<button
						className='btn btn-primary col-2'
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
