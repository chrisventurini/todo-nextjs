export const TODO_SUBMITTED = 'TODO_SUBMITTED';

export const todoSubmitted = (todo) => {
    return {
        type: TODO_SUBMITTED,
        todo
    }
};