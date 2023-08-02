import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineCheckCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

function TodoItem({ todo, userId, id, isCompleted, onDelete, onUpdate }) {
  const [modifyTodo, setModifyTodo] = useState(todo.todo);
  const [modifyMode, setModifyMode] = useState(false);
  const [originalTodo, setOriginalTodo] = useState(todo.todo);

  const handleModify = () => {
    setModifyMode(true);
    setModifyTodo(todo);
  };

  const handleSaveModify = (e) => {
    e.preventDefault();
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
    console.log('체크박스', !isCompleted);
  };

  return (
    <li className="flex justify-between p-2 my-1 overflow-y">
      {!modifyMode ? (
        <>
          <label className="flex items-center">
            <input
              className="mx-2 outline-none"
              type="checkbox"
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
          <div className="flex items-center">
            <button
              data-testid="modify-button"
              className=" text-text font-bold px-3 py-3 hover:bg-editButton hover:text-springGreen rounded-full"
              onClick={handleModify}
            >
              <AiOutlineEdit className="font-bold text-xl flex-shrink-0" />
            </button>
            <button
              data-testid="delete-button"
              className=" text-text font-bold px-3 py-3 hover:bg-BananaMania hover:text-jazzberryJam rounded-full"
              onClick={() => handleDelete(todo)}
            >
              <RiDeleteBin6Line className="font-bold text-xl flex-shrink-0" />
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSaveModify} className="flex flex-row">
          <label className="items-center ">
            <input
              className="mx-2 my-4"
              type="checkbox"
              checked={isCompleted}
              onChange={handleCheckboxChange}
              disabled
            />
            <input
              data-testid="modify-input"
              type="text"
              className="border-0 mr-3 flex-1 ml-2 text-lg relative outline-none rounded"
              value={modifyTodo}
              onChange={(e) => setModifyTodo(e.target.value)}
            />
          </label>
          <div className="flex items-center">
            <button
              data-testid="submit-button"
              type="submit"
              className=" text-text font-bold px-3 py-3 hover:bg-editButton hover:text-springGreen rounded-full"
            >
              <AiOutlineCheckCircle className="font-bold text-xl flex-shrink-0" />
            </button>
            <button
              data-testid="cancel-button"
              onClick={handleCancleModify}
              className=" text-text font-bold px-3 py-3 hover:bg-BananaMania hover:text-jazzberryJam rounded-full"
            >
              <MdOutlineCancel className="font-bold text-xl flex-shrink-0" />
            </button>
          </div>
        </form>
      )}
    </li>
  );
}
export default TodoItem;
