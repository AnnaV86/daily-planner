export const counterStore = (store) => store.counterReducer;
export const counterValue = (store) => counterStore(store).value;
