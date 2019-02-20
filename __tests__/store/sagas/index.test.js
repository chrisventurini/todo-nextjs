import routeHomeSage from '../../../store/sagas/routeHomeSaga';
import routingChangeSaga from '../../../store/sagas/routingChangeSaga';
import todoDeleteSaga from '../../../store/sagas/todoDeleteSaga';
import todoEditedSaga  from '../../../store/sagas/todoUpdateSaga';
import todoFetchPageSaga from '../../../store/sagas/todoFetchPageSaga';
import todoLoadSaga from '../../../store/sagas/todoLoadSaga';
import todoSaveSaga from '../../../store/sagas/todoSaveSaga';
import toggleFilterCompletedSaga from '../../../store/sagas/toggleFilterCompletedSaga';

import sageSetup from '../../../store/sagas';

describe('Sages Setup', () => {
     let mockRun;

    beforeEach(() => {
        mockRun = jest.fn();

        sageSetup({ run: mockRun });
    });

    it('should call run on the saga middleware for each required saga', () => {
        expect(mockRun).toBeCalledWith(routeHomeSage);
        expect(mockRun).toBeCalledWith(routingChangeSaga);
        expect(mockRun).toBeCalledWith(todoDeleteSaga);
        expect(mockRun).toBeCalledWith(todoEditedSaga);
        expect(mockRun).toBeCalledWith(todoFetchPageSaga);
        expect(mockRun).toBeCalledWith(todoLoadSaga);
        expect(mockRun).toBeCalledWith(todoSaveSaga);
        expect(mockRun).toBeCalledWith(toggleFilterCompletedSaga);
    });

});