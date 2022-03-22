import React from 'react';
import classNames from 'classnames';

import './todo.css';

const Todo = ({ todo, onDeleteTodo, onImportantTodo, onDoneTodo }) => {
  const classSpan = classNames('todo-label', {
    ['todo-label' + ' todo-label_type_active']: todo.important,
    ['todo-label' + ' todo-label_type_done']: todo.done,
  });
  const classBtn = classNames('todo-btn btn-important', {
    ['todo-btn btn-important' + ' btn-active']: todo.important,
  });

  return (
    <div className='todo'>
      <span className={classSpan} onClick={() => onDoneTodo(todo.id)}>
        {todo.label}
      </span>
      <button
        className='todo-btn btn-delete'
        onClick={() => onDeleteTodo(todo.id)}
      >
        Удалить
      </button>
      <button className={classBtn} onClick={() => onImportantTodo(todo.id)}>
        Важное
      </button>
    </div>
  );
};

export default Todo;
