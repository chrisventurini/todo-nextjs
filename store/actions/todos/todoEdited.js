import consts from '../../../consts';

export const TODO_EDITED = `${consts.ASYNC_STARTED}_TODO_EDITED`;

export const todoEdited = (todo) => {
    return {
        type: TODO_EDITED,
        todo
    }
};