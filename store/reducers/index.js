import { combineReducers } from 'redux';

import filterReducer from './filtersReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    filters: filterReducer,
    todos: todoReducer
});