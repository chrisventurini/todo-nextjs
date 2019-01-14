import { combineReducers } from 'redux';

import asyncReducer from './asyncReducer';
import filterReducer from './filtersReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    asyncCalls: asyncReducer,
    filters: filterReducer,
    todos: todoReducer
});