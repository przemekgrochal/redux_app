import { combineReducers } from 'redux'
import { counterReducer } from './reducers/counterReducer.js';
import { todosReducer } from './reducers/todosReducer.js';

export const rootReducer = combineReducers({
    counterReducer: counterReducer,
    todosReducer: todosReducer
});