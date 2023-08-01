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
        className="flex flex-row justify-center align-center my-2"
        onSubmit={handleSubmit}
      >
        <input
          data-testid="new-todo-input"
          className="rounded mr-2"
          onChange={handleInputChange}
          type="text"
          value={todo}
          placeholder="할일이 뭐에요?"
        />
        <button data-testid="new-todo-add-button" type="submit">
          <FiPlusCircle />
        </button>
      </form>
    </div>
  );
}
export default AddTodo;
