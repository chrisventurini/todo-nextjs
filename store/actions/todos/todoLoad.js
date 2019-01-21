export const TODO_LOAD = 'TODO_INITIAL_LOAD';

export const todoLoad = (data) => {
    return {
        ...data,
        type: TODO_LOAD,
    }
};