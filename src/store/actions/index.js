import { getTodoFetch } from '../../components/api/dailyPlanner';

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
