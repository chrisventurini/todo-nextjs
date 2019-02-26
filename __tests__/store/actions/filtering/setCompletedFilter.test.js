import { SET_FILTERED_COMPLETED, setFilterCompleted } from '../../../../store/actions/filtering/setFilterCompleted';


describe('setCompletedFilter', () => {

    describe('when executing', () => {
        let results;

        beforeEach(() => {
            results = setFilterCompleted(true);
        });

        it('should return the correct action type', () => {
           expect(results).toHaveProperty('type', SET_FILTERED_COMPLETED);
        });

        it('should return the passed completed filter value', () => {
           expect(results).toHaveProperty('completed', true);
        });

    });

});
