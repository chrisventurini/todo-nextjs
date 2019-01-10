import consts from '../../../consts';

export const TODO_SAVE_SUCCESSFUL = `${consts.ASYNC_COMPLETED}_TODO_SAVE_SUCCESSFUL`;

export const todoSaveSuccessful = (todo) => {
    return {
        type: TODO_SAVE_SUCCESSFUL,
        todo
    }
};