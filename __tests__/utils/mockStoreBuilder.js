import defaultStore from '../../store/defaultState';

export default (storeData = defaultStore) => {
    return {
        dispatch: jest.fn(),
        getState: jest.fn(() => storeData),
        subscribe: jest.fn()
    };
};