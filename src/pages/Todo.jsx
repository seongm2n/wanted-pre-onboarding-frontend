import React from 'react';
import TodoList from '../components/Todo/TodoList';

function Todo() {
  return (
    <div className="w-full flex flex-col m-6 p-1 items-center ">
      <h1>오늘 나의 할일</h1>
      <TodoList />
    </div>
  );
}
export default Todo;
