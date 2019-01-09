import consts from '../../../consts';

export const ROUTE_CHANGE_COMPLETED = `${consts.ASYNC_COMPLETED}_ROUTE_CHANGE_COMPLETED`;

export const routeChangeCompleted = () => {
    return {
        type: ROUTE_CHANGE_COMPLETED,
    }
};