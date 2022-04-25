import React, { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddNewTodo from '../add-new-todo/add-new-todo';
import { nanoid } from 'nanoid';
import { getTodoFetch, addTodoFetch } from '../api/dailyPlanner';

import './app.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementAction,
  getTodoFetchThunk,
  deleteTodoThunk,
  decrementAction,
  incrementByAmountAction,
  importantTodoThunk,
  doneTodoThunk,
} from '../../store/actions';
import { counterValue } from '../../selectors/counterSelectors';

export const App = () => {
  const valueState = useSelector(counterValue);
  const todosState = useSelector((store) => store.todoReducer.todo);
  const dispatch = useDispatch();
  const [todos, setTodo] = useState(todosState);
  const [number, setNumber] = useState('');

  const onDeleteTodo = (id) => {
    dispatch(deleteTodoThunk(id));
  };

  const onImportantTodo = (todo, id) => {
    dispatch(importantTodoThunk(todo, id));
  };

  const onDoneTodo = (todo, id) => {
    dispatch(doneTodoThunk(todo, id));
  };

  const addTodo = async (label) => {
    const newTodo = { id: nanoid(), label, important: false, done: false };

    await addTodoFetch(newTodo);

    const newTodoList = await getTodoFetch();

    setTodo(newTodoList);
  };

  const onFilterTodo = async ({ target: { value } }) => {
    const newTodoList = await getTodoFetch();

    const filteredTodoList = newTodoList.filter(
      (el) => el.label.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    setTodo(filteredTodoList);
  };

  const onClickIncrement = () => {
    dispatch(incrementAction());
  };

  const onClickDecrement = () => {
    dispatch(decrementAction());
  };

  const onChangeInput = (evt) => {
    setNumber(evt.target.value);
  };

  const onClickIncrementByAmount = () => {
    dispatch(incrementByAmountAction(number));
  };

  const onClickAll = async (e) => {
    const newTodoList = await getTodoFetch();
    const filter = e.target.innerText;
    switch (filter) {
      case 'Активные':
        setTodo(newTodoList.filter((todo) => !todo.done));
        break;
      case 'Выполнено':
        setTodo(newTodoList.filter((todo) => todo.done));
        break;
      default:
        setTodo(newTodoList);
    }
  };

  useEffect(() => {
    dispatch(getTodoFetchThunk());
  }, []);

  useEffect(() => {
    setTodo(todosState);
  }, [todosState]);

  return (
    <div>
      <AppHeader todos={todos} />
      <SearchPanel onFilterTodo={onFilterTodo} onClickAll={onClickAll} />
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onImportantTodo={onImportantTodo}
        onDoneTodo={onDoneTodo}
      />
      <AddNewTodo addTodo={addTodo} />
      счётчик: {valueState}
      <button type='button' onClick={onClickIncrement}>
        +
      </button>
      <button type='button' onClick={onClickDecrement}>
        -
      </button>
      <input
        type='number'
        placeholder='Введите число'
        onChange={onChangeInput}
      />
      <button type='button' onClick={onClickIncrementByAmount}>
        Прибавить
      </button>
    </div>
  );
};
