import {
  getTodoFetch,
  deleteTodoFetch,
  updateTodoFetch,
} from '../../components/api/dailyPlanner';

export function incrementAction() {
  return {
    type: 'increment',
  };
}

export function decrementAction() {
  return {
    type: 'decrement',
  };
}

export function incrementByAmountAction(number) {
  return {
    type: 'incrementByAmount',
    payload: number,
  };
}

export function addTodosAction(todos) {
  return {
    type: 'addTodo',
    payload: todos,
  };
}
export function getTodoFetchThunk() {
  return async (dispatch) => {
    const todos = await getTodoFetch();
    dispatch(addTodosAction(todos));
  };
}

export function deleteTodoAction(id) {
  return {
    type: 'deleteTodo',
    payload: id,
  };
}

export function deleteTodoThunk(id) {
  return async (dispatch) => {
    await deleteTodoFetch(id);

    dispatch(deleteTodoAction(id));
  };
}

export function importantTodoAction(newTodo, id) {
  return {
    type: 'importantTodo',
    payload: { newTodo, id },
  };
}

export function importantTodoThunk(todo, id) {
  return async (dispatch) => {
    const newTodo = { ...todo, important: !todo.important };
    await updateTodoFetch(newTodo, id);

    dispatch(importantTodoAction(newTodo, id));
  };
}

export function doneTodoAction(newTodo, id) {
  return {
    type: 'doneTodo',
    payload: { newTodo, id },
  };
}

export function doneTodoThunk(todo, id) {
  return async (dispatch) => {
    const newTodo = { ...todo, done: !todo.done };
    await updateTodoFetch(newTodo, id);

    dispatch(doneTodoAction(newTodo, id));
  };
}

export function editTodoAction(todo, id) {
  return {
    type: 'editTodo',
    payload: { todo: todo, id: id },
  };
}

export function editTodoThunk(todo, id) {
  return async (dispatch) => {
    await updateTodoFetch(todo, id);

    dispatch(editTodoAction(todo, id));
  };
}
