import { axiosJsonInstance } from '../config/axios';

//getTodos
export const getTodos = async () => {
	const accessToken = localStorage.getItem('access_token');
	const header = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	};

	try {
		const { data } = await axiosJsonInstance.get('/todos', header);
		return { data };
	} catch (error) {
		throw new Error(error.message);
	}
};

//createTodo
export const createTodo = async (todo) => {
	const accessToken = localStorage.getItem('access_token');
	const header = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	};
	const payload = {
		todo: todo,
	};

	try {
		const { data } = await axiosJsonInstance.post('/todos', payload, header);
		return { data };
	} catch (error) {
		throw new Error(error.message);
	}
};

//updateTodo
export const updateTodo = async (id, todo, isCompleted) => {
	const accessToken = localStorage.getItem('access_token');
	const header = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	};
	const payload = {
		todo,
		isCompleted,
	};
	try {
		const { data } = await axiosJsonInstance.put(
			`/todos/${id}`,
			payload,
			header
		);
		return data;
	} catch (error) {
		throw new Error(error.message);
	}
};

//deleteTodo
export const deleteTodo = async (id) => {
	const accessToken = localStorage.getItem('access_token');
	const header = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	};
	try {
		const response = await axiosJsonInstance.delete(`/todos/${id}`, header);

		if (response.status === 204) {
			return;
		} else {
			throw new Error(response.status);
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
