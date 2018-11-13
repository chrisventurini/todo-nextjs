export const INITIAL_LOAD = 'INITIAL_LOAD';

export const initialLoad = (todos) => {
    return {
        type: INITIAL_LOAD,
        todos
    }
};