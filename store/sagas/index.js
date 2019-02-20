import routeHomeSage from './routeHomeSaga';
import routingChangeSaga from './routingChangeSaga';
import todoDeleteSaga from './todoDeleteSaga';
import todoEditedSaga  from './todoUpdateSaga';
import todoFetchPageSage from './todoFetchPageSaga';
import todoLoadSaga from './todoLoadSaga';
import todoSaveSaga from './todoSaveSaga';
import toggleFilterCompletedSaga from './toggleFilterCompletedSaga';

export default (sagaMiddleware) => {
    sagaMiddleware.run(routeHomeSage);
    sagaMiddleware.run(routingChangeSaga);
    sagaMiddleware.run(todoDeleteSaga);
    sagaMiddleware.run(todoEditedSaga);
    sagaMiddleware.run(todoFetchPageSage);
    sagaMiddleware.run(todoLoadSaga);
    sagaMiddleware.run(todoSaveSaga);
    sagaMiddleware.run(toggleFilterCompletedSaga);
};