export const TODO_EDITED = 'TODO_EDITED';

export const todoEdited = (todo) => {
    return {
        type: TODO_EDITED,
        todo
    }
};