import consts from '../../../consts';

export const TODO_COMPLETE_SUCCESSFUL = `${consts.ASYNC_COMPLETED}_TODO_COMPLETE_SUCCESSFUL`;

export const todoCompleteSuccessful = (todo) => {
    return {
        type: TODO_COMPLETE_SUCCESSFUL,
        todo
    }
};