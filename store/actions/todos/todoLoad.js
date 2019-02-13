export const TODO_LOAD = 'TODO_LOAD';

export const todoLoad = (data) => {
    return {
        ...data,
        type: TODO_LOAD,
    }
};