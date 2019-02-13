import consts from '../../../../consts';
import { TODO_FETCH_PAGE, todoFetchPage } from '../../../../store/actions/todos/todoFetchPage';


describe('fetchTodoPage', () => {

    describe('when executing', () => {
        let results;

        beforeEach(() => {
            results = todoFetchPage();
        });

        it('should return the correct action type', () => {
           expect(results).toHaveProperty('type', TODO_FETCH_PAGE);
        });

        it('should return an action type that starts with ASYNC_STARTED', () => {
            expect(results.type.startsWith(consts.ASYNC_STARTED)).toEqual(true);
        });

    });

});
