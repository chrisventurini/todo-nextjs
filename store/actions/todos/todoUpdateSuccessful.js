import consts from '../../../consts';

export const TODO_UPDATE_SUCCESSFUL = `${consts.ASYNC_COMPLETED}_TODO_UPDATE_SUCCESSFUL`;

export const todoUpdateSuccessful = (todo) => {
    return {
        type: TODO_UPDATE_SUCCESSFUL,
        todo
    }
};