export const TODO_SAVED = 'TODO_SAVED';

export const todoSaved = (todo) => {
    return {
        type: TODO_SAVED,
        todo
    }
};