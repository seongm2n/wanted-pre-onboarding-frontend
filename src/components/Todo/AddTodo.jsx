import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

function AddTodo({ onAdd }) {
	const [todo, setTodo] = useState('');

	const handleInputChange = (e) => {
		setTodo(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (todo.trim() === '') {
				return;
			}
			onAdd(todo);
			setTodo('');
		} catch (error) {
			console.error('할일 추가 에러:', error.message);
		}
	};

	return (
		<div>
			<form
				className='flex w-full p-3'
				onSubmit={handleSubmit}
			>
				<input
					data-testid='new-todo-input'
					className='flex-auto text-lg px-4 py-2 border-0 outline-none rounded-l-lg'
					onChange={handleInputChange}
					type='text'
					value={todo}
					placeholder='할일이 뭐에요?'
				/>
				<button
					data-testid='new-todo-add-button'
					type='submit'
					className='bg-text hover:bg-buttonHover text-white font-bold px-4 py-2 rounded-r-lg'
				>
					<FiPlusCircle className='font-bold text-2xl flex-shrink-0' />
				</button>
			</form>
		</div>
	);
}
export default AddTodo;
