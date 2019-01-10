import consts from '../../../consts';

export const TODO_UPDATE = `${consts.ASYNC_STARTED}_TODO_UPDATED`;

export const todoUpdate = (todo) => {
    return {
        type: TODO_UPDATE,
        todo
    }
};