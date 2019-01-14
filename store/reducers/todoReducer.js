import { actionTypes } from "../actions/todos/index";

export default (state = [], data) => {
    let newState;
    switch (data.type) {
        case actionTypes.TODO_DELETE:
            newState = state.filter(todo => todo.id !== data.todo.id);
            break;
        case actionTypes.TODO_INITIAL_LOAD:
            newState = data.todos ;
            break;
        case actionTypes.TODO_UPDATE:
            newState = state.map(todo => {
                if(todo.id === data.todo.id)
                    return data.todo;

                return todo;
            });
            break;
        case actionTypes.TODO_SAVE_SUCCESSFUL:
            newState = state.slice(0);
            newState.push(data.todo);
            break;
        default:
            newState = state;
    }

    return newState;
}