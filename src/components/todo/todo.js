import React, { useState } from 'react';
import classNames from 'classnames';

import './todo.css';
import { updateTodoFetch } from '../api/dailyPlanner';

const Todo = ({
  todo,
  onDeleteTodo,
  onImportantTodo,
  onDoneTodo,
  onSaveEditing,
}) => {
  const classSpan = classNames('todo-label', {
    ['todo-label' + ' todo-label_type_active']: todo.important,
    ['todo-label' + ' todo-label_type_done']: todo.done,
  });
  const classBtn = classNames('todo-btn btn-important', {
    ['todo-btn btn-important' + ' btn-active']: todo.important,
  });
  const [inputValue, setInputValue] = useState('');
  const [toggle, setToggle] = useState(true);

  const onChangeInputEditingTodo = (event) => {
    setInputValue(event.target.value);
  };

  const onSaveEditingTodo = async () => {
    const newTodo = { ...todo, label: inputValue };
    await updateTodoFetch(newTodo, todo.id);
    onSaveEditing();
    setToggle(true);
  };

  const onEditingTodo = () => {
    setInputValue(todo.label);
    setToggle(false);
  };

  return (
    <div className='todo'>
      {toggle ? (
        <div className='todoSpan'>
          {' '}
          <span className={classSpan} onClick={() => onDoneTodo(todo, todo.id)}>
            {todo.label}
          </span>{' '}
          <button
            className='todo-btn btn-editing'
            onClick={onEditingTodo}
          ></button>
        </div>
      ) : (
        <div className='todoSpan'>
          {' '}
          <input
            className='editing__input'
            type='text'
            value={inputValue}
            onChange={onChangeInputEditingTodo}
          ></input>{' '}
          <button
            className='todo-btn btn-save'
            onClick={onSaveEditingTodo}
          ></button>
        </div>
      )}

      <button
        className='todo-btn btn-delete'
        onClick={() => onDeleteTodo(todo.id)}
      >
        Удалить
      </button>
      <button
        className={classBtn}
        onClick={() => onImportantTodo(todo, todo.id)}
      >
        Важное
      </button>
    </div>
  );
};

export default Todo;
