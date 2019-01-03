import { todoActionTypes } from "../actions";

export default (state = [], data) => {
    let newState;
    switch (data.type) {
        case todoActionTypes.INITIAL_LOAD:
            newState = data.todos ;
            break;
        case todoActionTypes.TODO_EDITED:
            newState = state.map(todo => {
                if(todo.id === data.todo.id)
                    return data.todo;

                return todo;
            });
            break;
        case todoActionTypes.TODO_SAVED:
            newState = state.slice(0);
            newState.push(data.todo);
            break;
        default:
            newState = state;
    }

    return newState;
}