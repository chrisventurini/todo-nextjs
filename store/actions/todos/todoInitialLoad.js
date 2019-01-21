export const TODO_INITIAL_LOAD = 'TODO_INITIAL_LOAD';

export const todoInitialLoad = (data) => {
    return {
        ...data,
        type: TODO_INITIAL_LOAD,
    }
};