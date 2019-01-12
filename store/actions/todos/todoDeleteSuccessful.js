import consts from '../../../consts';

export const TODO_DELETE_SUCCESSFUL = `${consts.ASYNC_COMPLETED}_TODO_DELETE_SUCCESSFUL`;

export const todoDeleteSuccessful = (todo) => {
    return {
        type: TODO_DELETE_SUCCESSFUL,
        todo
    }
};