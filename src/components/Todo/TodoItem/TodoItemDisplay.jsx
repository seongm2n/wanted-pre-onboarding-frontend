import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CheckboxInput from '../../Input/CheckboxInput';
import DisplayButton from '../../Button/DisplayButton';

function TodoItemDisplay({
	todo,
	isCompleted,
	handleCheckboxChange,
	handleModify,
	handleDelete,
}) {
	return (
		<>
			<label className='flex items-center'>
				<CheckboxInput onChange={handleCheckboxChange} checked={isCompleted} />
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
				<DisplayButton
					data-testid='modify-button'
					text={<AiOutlineEdit className='font-bold text-xl flex-shrink-0' />}
					onClick={handleModify}
				/>
				<DisplayButton
					data-testid='delete-button'
					text={
						<RiDeleteBin6Line className='font-bold text-xl flex-shrink-0' />
					}
					onClick={() => handleDelete(todo)}
					isDeleteButton
				/>
			</div>
		</>
	);
}

export default TodoItemDisplay;
