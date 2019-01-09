import consts from '../../../consts';

export const TODO_SAVED = `${consts.ASYNC_COMPLETED}_TODO_SAVED`;

export const todoSaved = (todo) => {
    return {
        type: TODO_SAVED,
        todo
    }
};