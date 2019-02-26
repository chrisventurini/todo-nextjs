import { actionTypes } from "../../../store/actions/filtering";
import filtersReducer from '../../../store/reducers/filtersReducer';

describe('filtersReducer', () => {
    let stubData,
        stubState,
        results;

    beforeEach(() => {
       stubData = {};
       stubState = {};
    });

    describe('when executing', () => {

        describe('and the action is unknown', () => {
            beforeEach(() => {
                stubData.type = 'UNKNOWN';

                stubData.completed = false;
                results = filtersReducer(stubState, stubData);
            });

            it('should return the original state', () =>{
                expect(results).toEqual(stubState);
            });

        });

        describe('and the action is SET_FILTERED_COMPLETED', () => {

            beforeEach(() => {
                stubData.type = actionTypes.SET_FILTERED_COMPLETED;

                stubData.completed = true;

                results = filtersReducer(stubState, stubData);
            });

            it('should set the state to the passed completed value', () => {
                expect(results.completed).toEqual(true);
            });

        });

    });

});