import { _bootstrapFilters, _defaultState } from '../../store/defaultState';

describe('_defaultStore', () => {

    it('should be the expected object', () => {
        let expectedObj = {
            filters: {
                completed: true
            },
            todos: {
                collection: [],
                count: 0
            },
            asyncCalls: {
                inProgress: false,
                num: 0
            }
        };

        expect(_defaultState).toEqual(expectedObj);
    });
});

describe('_bootstrapFilters', () => {

    describe('within the browser', () => {

        beforeEach(() => {
            process.browser = true;
        });

        describe('with params', () =>{

            describe('should return the expected object based on the completed param', () => {

                ([
                    ['filterCompleted=true', true],
                    ['filterCompleted=false', false],
                    ['', true]
                ])
                    .forEach(([param, expected]) => {

                    it('should be the expected object', () => {
                        window.history.pushState({}, 'Test Title', `/?${param}&blah=false`);

                        let results = _bootstrapFilters(_defaultState);
                        let expectedObj = {
                            filters: {
                                completed: expected
                            },
                            todos: {
                                collection: [],
                                count: 0
                            },
                            asyncCalls: {
                                inProgress: false,
                                num: 0
                            }
                        };

                        expect(results).toEqual(expectedObj);
                    });

                });

            });

        });

        describe('without params', () =>{

            it('should be the expected object', () => {
                window.history.pushState({}, 'Test Title', '');

                let results = _bootstrapFilters(_defaultState);

                let expectedObj = {
                    filters: {
                        completed: true
                    },
                    todos: {
                        collection: [],
                        count: 0
                    },
                    asyncCalls: {
                        inProgress: false,
                        num: 0
                    }
                };

                expect(results).toEqual(expectedObj);
            });

        });

    });

});