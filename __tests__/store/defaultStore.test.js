import defaultState, { _bootstrapFilters } from '../../store/defaultState';

describe('defaultStore', () => {

    describe('not within the browser', () => {

        it('should be the expected object', () => {
            process.browser = false;

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

            expect(defaultState).toEqual(expectedObj);
        });

    });

    describe('within the browser', () => {

        describe('with params', () =>{

            describe('should return the expected object based on the completed param', () => {

                ([
                    ['filterCompleted=true', true],
                    ['filterCompleted=false', false],
                    ['', true]
                ])
                    .forEach(([param, expected]) => {

                        // TODO: rewrite to test bootstrap function in isolation
                    it('should be the expected object', () => {
                        process.browser = true;
                        window.history.pushState({}, 'Test Title', `/?${param}&blah=false`);

                        let SUT = _bootstrapFilters(defaultState);
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

                        expect(SUT).toEqual(expectedObj);
                    });

                });

            });

        });

        describe('without params', () =>{

            describe('should return the expected object', () => {

                it('should be the expected object', () => {
                    window.history.pushState({}, 'Test Title', '');

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

                    expect(defaultState).toEqual(expectedObj);
                });

            });

        });

    });

});