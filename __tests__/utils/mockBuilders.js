import defaultStore from '../../store/defaultState';

export function mockRouterBuilder() {
    return {
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: () => {}
    };
}

export function mockStoreBuilder(storeData = defaultStore) {
    return {
        dispatch: jest.fn(),
        getState: jest.fn(() => storeData),
        subscribe: jest.fn()
    };
}