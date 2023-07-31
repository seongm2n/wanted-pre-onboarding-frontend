import { axiosJsonInstance } from '../config/axios';

//getTodos
export const getTodos = async (access_token) => {
  try {
    const { data } = await axiosJsonInstance.get(`/todos`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return { data };
  } catch (error) {
    throw new Error('Error get todos: ', error.message);
  }
};

//createTodo
export const createTodo = async (access_token, todo) => {
  try {
    const body = {
      todo,
    };
    const { data } = await axiosJsonInstance.post(`/todos`, body, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return { data };
  } catch (error) {
    throw new Error('Error creating todo: ', error.message);
  }
};

//updateTodo
export const updateTodo = async (access_token, todoId, todo, isCompleted) => {
  try {
    const body = {
      todo,
      isCompleted,
    };
    const { data } = await axiosJsonInstance.put(`/todos/${todoId}`, body, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return { data };
  } catch (error) {
    throw new Error('Error updating todo: ', error.message);
  }
};

//deleteTodo
export const deleteTodo = async (access_token, todoId) => {
  try {
    const response = await axiosJsonInstance.delete(`/todos/${todoId}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 204) {
      return;
    } else {
      throw new Error('Error deleting todo: ', response.status);
    }
  } catch (error) {
    throw new Error('Error deleting todo: ', error.message);
  }
};
