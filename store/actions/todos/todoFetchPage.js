import consts from '../../../consts';

export const TODO_FETCH_PAGE = `${consts.ASYNC_STARTED}_TODO_FETCH_PAGE`;

export const todoFetchPage = () => {
    return {
        type: TODO_FETCH_PAGE
    }
};