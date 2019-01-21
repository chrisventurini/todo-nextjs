import defaultState from '../defaultState';
import { actionTypes } from "../actions/todos/index";


export default (state = defaultState.todos, data) => {
    let initialTodos = state.collection,
        newTodos;

    switch (data.type) {
        case actionTypes.TODO_LOAD:
            return {
                ...data,
                type: undefined
            };
        case actionTypes.TODO_DELETE:
            newTodos = initialTodos.filter(todo => todo.id !== data.todo.id);
            break;
        case actionTypes.TODO_COMPLETE_SUCCESSFUL:
        case actionTypes.TODO_UPDATE_SUCCESSFUL:
            newTodos = initialTodos.map(todo => {
                if(todo.id === data.todo.id)
                    return data.todo;

                return todo;
            });
            break;
        case actionTypes.TODO_SAVE_SUCCESSFUL:
            newTodos = initialTodos.slice(0);
            newTodos.push(data.todo);
            break;
        default:
            return state;
    }

    return {
        count: state.count,
        collection: newTodos
    };
}