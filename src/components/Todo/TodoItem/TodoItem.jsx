import React, { useState, useCallback } from 'react';
import { useTodoContext } from '../../../context/TodoContext';
import TodoItemDisplay from '../TodoItem/TodoItemDisplay';
import TodoItemEdit from '../TodoItem/TodoItemEdit';

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
				<TodoItemDisplay
					isCompleted={isCompleted}
					handleCheckboxChange={handleCheckboxChange}
					todo={todo}
					handleModify={handleModify}
					handleDelete={handleDelete}
				/>
			) : (
				<TodoItemEdit
					isCompleted={isCompleted}
					handleCheckboxChange={handleCheckboxChange}
					modifyTodo={modifyTodo}
					setModifyTodo={setModifyTodo}
					handleSaveModify={handleSaveModify}
					handleCancleModify={handleCancleModify}
				/>
			)}
		</li>
	);
}
export default TodoItem;
