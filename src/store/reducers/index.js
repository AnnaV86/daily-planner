import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todoReducer from './todos';

const rootReducer = combineReducers({ counterReducer, todoReducer });
export default rootReducer;
