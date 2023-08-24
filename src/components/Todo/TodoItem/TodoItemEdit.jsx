import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { HiOutlineSave } from 'react-icons/hi';
import CheckboxInput from '../../Input/CheckboxInput';
import Input from '../../Input/Input';
import EditButton from '../../Button/EditButton';

function TodoItemEdit({
	modifyTodo,
	isCompleted,
	handleCheckboxChange,
	handleSaveModify,
	handleCancleModify,
	setModifyTodo,
}) {
	return (
		<>
			<label className='items-center flex-1 '>
				<CheckboxInput
					checked={isCompleted}
					onChange={handleCheckboxChange}
					disabled
				/>
				<Input
					dataTestId='modify-input'
					value={modifyTodo}
					onChange={(e) => setModifyTodo(e.target.value)}
				/>
			</label>
			<div className='flex justify-between items-center'>
				<EditButton
					datatestId='submit-button'
					text={<HiOutlineSave className='font-bold text-xl flex-shrink-0' />}
					onClick={handleSaveModify}
				/>
				<EditButton
					datatestId='cancel-button'
					onClick={handleCancleModify}
					text={<MdOutlineCancel className='font-bold text-xl flex-shrink-0' />}
					isCancleButton
				/>
			</div>
		</>
	);
}

export default TodoItemEdit;
