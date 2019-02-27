import { actionTypes } from "../../../store/actions/filtering";

import toggleFilterCompletedSaga, { _addFilterParam } from '../../../store/sagas/filterCompletedParamSaga';

//Mock dependencies
jest.mock('redux-saga/effects');
import * as mockEffects from 'redux-saga/effects';

describe('filterCompletedParamSaga', () => {

    afterEach(() => {
       jest.resetAllMocks();
    });

    describe('when executing', () => {
        beforeEach(() => {
            toggleFilterCompletedSaga()
                .next();
        });

        it('should take every TOGGLE_FILTER_COMPLETED action and with the _addFilterParam function', () => {
            expect(mockEffects.takeEvery).toBeCalledWith(actionTypes.SET_FILTERED_COMPLETED, _addFilterParam);
        });

    });

    describe('when adding the filter parameter to the current URL', () => {

        describe('and not within a browser', () => {

            beforeEach(() => {
                process.browser = false;
                window.history.pushState = jest.fn();

                let resultGen =_addFilterParam();
                resultGen.next();
                resultGen.next(true);
            });

            it('should not add the complete param to the url', () =>{
                expect(window.history.pushState).not.toBeCalled();
            });

            it('should not get the state of completed filter from the store', () => {
                expect(mockEffects.select).not.toBeCalled();
            });

        });

        describe('and within a browser', () => {

            beforeEach(() => {
                process.browser = true;
                window.history.pushState = jest.fn();
            });

            describe('and the parameter existed previously', () => {

                beforeEach(() => {
                    window.history.pushState({}, 'Test Title', `/?filterCompleted=true`);

                    let resultGen =_addFilterParam();
                    resultGen.next();
                    resultGen.next(true);
                });

                it('should not duplicate the parameter', () =>{
                    let expPath = 'http://localhost/?filterCompleted=true&';

                    expect(window.history.pushState).toBeCalledWith({
                            path: expPath
                        }, '', expPath
                    );
                });
            });

            describe('and the parameter did not exist previously', () => {

                beforeEach(() => {
                    let resultGen =_addFilterParam();
                    resultGen.next();
                    resultGen.next(true);
                });

                it('should add the complete param to the url', () =>{
                    let expPath = 'http://localhost/?filterCompleted=true';

                    expect(window.history.pushState).toBeCalledWith({
                            path: expPath
                        }, '', expPath
                    );
                });

                it('should get the state of completed filter from the store', () => {
                    expect(mockEffects.select).toBeCalled();
                });

            });

        });

    });

});