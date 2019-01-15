import consts from '../../../consts';

export const TODO_COMPLETE = `${consts.ASYNC_STARTED}_TODO_COMPLETE`;

export const todoComplete = (todo) => {
    return {
        type: TODO_COMPLETE,
        todo
    }
};