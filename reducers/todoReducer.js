import { actionTypes } from "../actions/todos/index";

export default (state = [], data) => {
    let newState;
    switch (data.type) {
        case actionTypes.INITIAL_LOAD:
            newState = data.todos ;
            break;
        case actionTypes.TODO_EDITED:
            newState = state.map(todo => {
                if(todo.id === data.todo.id)
                    return data.todo;

                return todo;
            });
            break;
        case actionTypes.TODO_SAVED:
            newState = state.slice(0);
            newState.push(data.todo);
            break;
        default:
            newState = state;
    }

    return newState;
}