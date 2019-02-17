import defaultState from '../defaultState';
import { actionTypes } from "../actions/todos/index";


export default (state = defaultState.todos, data) => {
    let newState;

    switch (data.type) {
        case actionTypes.TODO_LOAD:
            newState = { ...data };
            delete newState.type;
            break;
        case actionTypes.TODO_DELETE:
            newState =  {
                collection: state.collection.filter(todo => todo.id !== data.todo.id),
                count: --state.count
            };
            break;
        case actionTypes.TODO_COMPLETE_SUCCESSFUL:
        case actionTypes.TODO_UPDATE_SUCCESSFUL:
            let collection = state.collection.map(todo => {
                if(todo.id === data.todo.id)
                    return data.todo;

                return todo;
            });
            newState = {
                collection,
                count: state.count
            };
            break;
        case actionTypes.TODO_SAVE_SUCCESSFUL:
            newState = {
                collection: state.collection.slice(0),
                count: ++state.count
            };
            newState.collection.push(data.todo);

            break;
        default:
            newState = state;
    }

    return newState
}