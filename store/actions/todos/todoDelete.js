import consts from '../../../consts';

export const TODO_DELETE = `${consts.ASYNC_STARTED}_TODO_DELETE`;

export const todoDelete = (todo) => {
    return {
        type: TODO_DELETE,
        todo
    }
};