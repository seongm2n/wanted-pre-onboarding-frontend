import React, { useState, useEffect } from 'react';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../../api/todo';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function TodoList() {
	const [todos, setTodos] = useState([]);

	// 새로운 할일을 추가하는 함수
	const addTodo = async (todo) => {
		try {
			const res = await createTodo(todo);

			setTodos([...todos, res.data]);
		} catch (error) {
			console.error('할일 추가 에러: ', error.message);
		}
	};

	// 할일을 삭제하는 함수
	const handleDelete = async (id) => {
		try {
			await deleteTodo(id);
			const updatedTodos = todos.filter((item) => item.id !== id);
			setTodos(updatedTodos);
		} catch (error) {
			console.error('할일 삭제 에러:', error.message);
		}
	};

	// 할일 수정하는 함수
	const handleUpdate = async (id, updatedTodo, isCompleted) => {
		try {
			await updateTodo(id, updatedTodo, isCompleted);

			if (isCompleted !== todos.find((item) => item.id === id)?.isCompleted) {
				setTodos((prevTodos) =>
					prevTodos.map((item) =>
						item.id === id ? { ...item, todo: updatedTodo, isCompleted } : item
					)
				);
			} else {
				setTodos((prevTodos) =>
					prevTodos.map((item) =>
						item.id === id ? { ...item, todo: updatedTodo } : item
					)
				);
			}
		} catch (error) {
			console.error('할일 업데이트 에러:', error.message);
		}
	};

	// 할일 조회하는 함수
	const fetchTodos = async (setTodos) => {
		try {
			const res = await getTodos('/todos');
			setTodos(res.data);
		} catch (error) {
			console.error('할일 조회 에러:', error.message);
		}
	};

	useEffect(() => {
		fetchTodos(setTodos);
	}, []);

	return (
		<section className='flex flex-col'>
			<ul className='flex flex-col bg-white min-h-0 h-[500px] overflow-y-auto  sm:w-[400px] xl:w-[500px] lg:w-[600px] rounded-lg shadow-md'>
				{todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo.todo}
						userId={todo.userId}
						id={todo.id}
						isCompleted={todo.isCompleted}
						onDelete={handleDelete}
						onUpdate={handleUpdate}
					/>
				))}
			</ul>
			<AddTodo onAdd={addTodo} />
		</section>
	);
}
export default TodoList;
