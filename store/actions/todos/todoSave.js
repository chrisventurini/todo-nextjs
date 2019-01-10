import consts from '../../../consts';

export const TODO_SAVE = `${consts.ASYNC_STARTED}_TODO_SAVE`;

export const todoSave = (todo) => {
    return {
        type: TODO_SAVE,
        todo
    }
};