import consts from '../../../consts';

export const TODO_SUBMITTED = `${consts.ASYNC_STARTED}_TODO_SUBMITTED`;

export const todoSubmitted = (todo) => {
    return {
        type: TODO_SUBMITTED,
        todo
    }
};