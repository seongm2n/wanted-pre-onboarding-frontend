import React, { useState, useCallback } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { HiOutlineSave } from 'react-icons/hi';
import { useTodoContext } from '../../context/TodoContext';

function TodoItem({ todo, userId, id, isCompleted, onDelete, onUpdate }) {
	const [modifyTodo, setModifyTodo] = useState(todo.todo);
	const [modifyMode, setModifyMode] = useState(false);
	const {
		currentModifyItemId,
		setCurrentModifyItemId,
		isModifying,
		setIsModifying,
	} = useTodoContext();

	const handleModify = useCallback(() => {
		if (!isModifying) {
			setModifyMode(true);
			setModifyTodo(todo);
			setCurrentModifyItemId(id);
			setIsModifying(true);
		}
	}, [todo, id, isModifying, setCurrentModifyItemId, setIsModifying]);

	const handleSaveModify = useCallback(
		(e) => {
			e.preventDefault();
			if (currentModifyItemId === id) {
				onUpdate(id, modifyTodo, isCompleted);
				setModifyMode(false);
				setCurrentModifyItemId(null);
				setIsModifying(false);
			}
		},
		[
			id,
			modifyTodo,
			isCompleted,
			onUpdate,
			currentModifyItemId,
			setCurrentModifyItemId,
			setIsModifying,
		]
	);

	const handleCancleModify = useCallback(() => {
		if (currentModifyItemId === id) {
			setModifyMode(false);
			setModifyTodo(todo);
			setCurrentModifyItemId(null);
			setIsModifying(false);
		}
	}, [todo, id, currentModifyItemId, setCurrentModifyItemId, setIsModifying]);

	const handleDelete = useCallback(() => {
		onDelete(id);
	}, [id, onDelete]);

	const handleCheckboxChange = useCallback(() => {
		onUpdate(id, todo, !isCompleted);
	}, [id, todo, isCompleted, onUpdate]);

	return (
		<li className='flex justify-between p-2 my-1 overflow-y'>
			{!modifyMode ? (
				<>
					<label className='flex items-center'>
						<input
							className='mx-2 outline-none'
							type='checkbox'
							checked={isCompleted}
							onChange={handleCheckboxChange}
						/>
						<span
							className={
								isCompleted
									? 'line-through text-gray-500 cursor-pointer'
									: 'cursor-pointer flex-1 ml-2 text-lg relative '
							}
						>
							{todo}
						</span>
					</label>
					<div className='flex items-center'>
						<button
							data-testid='modify-button'
							className=' text-text font-bold px-3 py-3 hover:bg-editButton hover:text-springGreen rounded-full'
							onClick={handleModify}
						>
							<AiOutlineEdit className='font-bold text-xl flex-shrink-0' />
						</button>
						<button
							data-testid='delete-button'
							className=' text-text font-bold px-3 py-3 hover:bg-BananaMania hover:text-jazzberryJam rounded-full'
							onClick={() => handleDelete(todo)}
						>
							<RiDeleteBin6Line className='font-bold text-xl flex-shrink-0' />
						</button>
					</div>
				</>
			) : (
				<>
					<label className='items-center flex-1 '>
						<input
							className='mx-2 my-4'
							type='checkbox'
							checked={isCompleted}
							onChange={handleCheckboxChange}
							disabled
						/>
						<input
							data-testid='modify-input'
							type='text'
							className='flex-auto text-lg pr-10 pl-2 border-0 outline-none rounded w-[80%]'
							value={modifyTodo}
							onChange={(e) => setModifyTodo(e.target.value)}
						/>
					</label>

					<div className='flex justify-between items-center'>
						<button
							data-testid='submit-button'
							onClick={handleSaveModify}
							className=' text-text font-bold px-3 py-3 hover:bg-editButton hover:text-springGreen rounded-full'
						>
							<HiOutlineSave className='font-bold text-xl flex-shrink-0' />
						</button>
						<button
							data-testid='cancel-button'
							onClick={handleCancleModify}
							className=' text-text font-bold px-3 py-3 hover:bg-BananaMania hover:text-jazzberryJam rounded-full'
						>
							<MdOutlineCancel className='font-bold text-xl flex-shrink-0' />
						</button>
					</div>
				</>
			)}
		</li>
	);
}
export default TodoItem;
