import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin2Line } from 'react-icons/ri';

function TodoItem({ todo, userId, id, isCompleted, onDelete, onUpdate }) {
  const [modifyTodo, setModifyTodo] = useState(todo.todo);
  const [modifyMode, setModifyMode] = useState(false);
  const [originalTodo, setOriginalTodo] = useState(todo.todo);

  const handleModify = () => {
    setModifyMode(true);
  };

  const handleSaveModify = () => {
    console.log('save modify todo: ', modifyTodo);
    onUpdate(id, modifyTodo, isCompleted);
    setModifyMode(false);
  };

  const handleCancleModify = () => {
    setModifyMode(false);
    setModifyTodo(originalTodo);
  };

  const handleDelete = () => onDelete(id);

  const handleCheckboxChange = () => {
    onUpdate(id, todo, !isCompleted);
  };

  return (
    <div className="flex flex-row m-3">
      <li className="flex flex-row none">
        <div className="flex flex-row mx-2">
          {!modifyMode ? (
            <div>
              <label>
                <input
                  className="mx-3"
                  type="checkbox"
                  checked={isCompleted}
                  onChange={handleCheckboxChange}
                />
                <span
                  className={isCompleted ? 'line-through text-gray-500' : ''}
                >
                  {todo}
                </span>
              </label>
              <button
                data-testid="modify-button"
                className="mx-2"
                onClick={handleModify}
              >
                <AiOutlineEdit />
              </button>
              <button
                data-testid="delete-button"
                className="mx-2"
                onClick={() => handleDelete(todo)}
              >
                <RiDeleteBin2Line />
              </button>
            </div>
          ) : (
            <div>
              <label htmlFor="">
                <input
                  className="mx-3"
                  type="checkbox"
                  checked={isCompleted}
                  onChange={handleCheckboxChange}
                  disabled
                />
                <input
                  data-testid="modify-input"
                  type="text"
                  value={modifyTodo}
                  onChange={(e) => setModifyTodo(e.target.value)}
                />
              </label>

              <button data-testid="submit-button" onClick={handleSaveModify}>
                제출
              </button>
              <button data-testid="cancel-button" onClick={handleCancleModify}>
                취소
              </button>
            </div>
          )}
        </div>
      </li>
    </div>
  );
}
export default TodoItem;
