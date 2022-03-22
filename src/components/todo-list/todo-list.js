import React from 'react';

import Todo from '../todo/todo';

import style from './todo-list.module.css';

const TodoList = ({ todos, onDeleteTodo, onImportantTodo, onDoneTodo }) => {
  return (
    <ul className={style.todoList}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onImportantTodo={onImportantTodo}
            onDoneTodo={onDoneTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
