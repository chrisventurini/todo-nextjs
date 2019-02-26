export const SET_FILTERED_COMPLETED = 'TOGGLE_FILTER_COMPLETED';

export const setFilterCompleted = (completed) => {
    return {
        completed,
        type: SET_FILTERED_COMPLETED
    }
};