import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import Input from '../Input/Input';

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
				<Input
					data-testid='new-todo-input'
					onChange={handleInputChange}
					value={todo}
					placeholder='할일이 뭐에요?'
					isAddInput
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
