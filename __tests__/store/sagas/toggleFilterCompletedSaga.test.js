import { actionTypes } from "../../../store/actions/filtering";

import toggleFilterCompletedSaga, { _addFilterParam } from '../../../store/sagas/toggleFilterCompletedSaga';

//Mock dependencies
jest.mock('redux-saga/effects');
import * as mockEffects from 'redux-saga/effects';

describe('toggleFilterCompletedSaga', () => {

    afterEach(() => {
       jest.resetAllMocks();
    });

    describe('when executing', () => {
        beforeEach(() => {
            toggleFilterCompletedSaga()
                .next();
        });

        it('should take every TOGGLE_FILTER_COMPLETED action and with the _addFilterParam function', () => {
            expect(mockEffects.takeEvery).toBeCalledWith(actionTypes.TOGGLE_FILTER_COMPLETED, _addFilterParam);
        });

    });

    describe('when adding the filter parameter to the current URL', () => {

        beforeEach(() => {
            window.location.assign = jest.fn();

            let resultGen =_addFilterParam();
            resultGen.next();
            resultGen.next(true);
        });

        it('should add the complete param to the url', () =>{
            expect(window.location.assign).toBeCalledWith('http://localhost/?completed=true');
        });

        it('should get the state of completed filter from the store', () => {
            expect(mockEffects.select).toBeCalled();
        });

    });

});