import React, { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddNewTodo from '../add-new-todo/add-new-todo';
import { nanoid } from 'nanoid';
import {
  getTodoFetch,
  updateTodoFetch,
  deleteTodoFetch,
  addTodoFetch,
} from '../api/dailyPlanner';

import './app.css';

export const App = () => {
  const [todos, setTodo] = useState([]);

  const onDeleteTodo = async (id) => {
    await deleteTodoFetch(id);

    const newTodoList = await getTodoFetch();

    setTodo(newTodoList);
  };

  const onImportantTodo = async (todo, id) => {
    const changedTodoImportant = { ...todo, important: !todo.important };

    await updateTodoFetch(changedTodoImportant, id);

    const newTodoList = await getTodoFetch();

    setTodo(newTodoList);
  };

  const onDoneTodo = async (todo, id) => {
    const changedTodoDone = { ...todo, done: !todo.done };

    await updateTodoFetch(changedTodoDone, id);

    const newTodoList = await getTodoFetch();

    setTodo(newTodoList);
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
    (async () => {
      const response = await getTodoFetch();
      setTodo(response);
    })();
  }, []);

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
    </div>
  );
};
