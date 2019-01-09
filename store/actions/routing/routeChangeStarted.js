import consts from '../../../consts';

export const ROUTE_CHANGE_STARTED = `${consts.ASYNC_STARTED}_ROUTE_CHANGE_STARTED`;

export const routeChangeStarted = () => {
    return {
        type: ROUTE_CHANGE_STARTED,
    }
};