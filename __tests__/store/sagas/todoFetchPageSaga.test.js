import { actions, actionTypes} from "../../../store/actions/todos/index";

import todoFetchPageSaga, { _fetchPage } from '../../../store/sagas/todoFetchPageSaga';

//Mock dependencies
jest.mock('redux-saga/effects');
import * as mockEffects from 'redux-saga/effects';

describe('todoFetchPageSaga', () => {

    afterEach(() => {
       jest.resetAllMocks();
    });

    describe('when executing', () => {
        let resultGen;

        beforeEach(() => {
            resultGen = todoFetchPageSaga();
            resultGen.next();
        });

        it('should take every TODO_FETCH_PAGE action and execute the _fetchPage function', () => {
            expect(mockEffects.takeEvery).toHaveBeenCalledWith(actionTypes.TODO_FETCH_PAGE, _fetchPage);
        });

    });

    describe('when fetching a page', () => {
        let resultGen;

        beforeEach(() => {
            resultGen = _fetchPage();
        });

        it('', () => {

        });

    });

});