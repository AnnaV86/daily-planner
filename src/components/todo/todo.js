import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import './todo.css';
import { editTodoThunk } from '../../store/actions';

const Todo = ({
  todo,
  onDeleteTodo,
  onImportantTodo,
  onDoneTodo
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
  const dispatch = useDispatch();

  const onChangeInputEditingTodo = (event) => {
    setInputValue(event.target.value);
  };

  const onSaveEditingTodo = () => {
    const newTodo = { ...todo, label: inputValue };
    dispatch(editTodoThunk(newTodo, todo.id));
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
