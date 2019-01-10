export const TODO_INITIAL_LOAD = 'TODO_INITIAL_LOAD';

export const todoInitialLoad = (todos) => {
    return {
        type: TODO_INITIAL_LOAD,
        todos
    }
};