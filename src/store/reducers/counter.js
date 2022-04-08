const initialState = { value: 1 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, value: state.value + 1 };
    case 'decrement':
      return { ...state, value: state.value - 1 };
    case 'incrementByAmount':
      return { ...state, value: state.value + Number(action.payload) };
    default:
      return state;
  }
}

export default counterReducer;
