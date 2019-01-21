import routeHomeSage from './routeHomeSaga';
import routingChangeSaga from './routingChangeSaga';
import todoDeleteSaga from './todoDeleteSaga';
import todoEditedSaga  from './todoUpdateSaga';
import todoLoadSaga from './todoLoadSaga';
import todoSaveSaga from './todoSaveSaga';

export default (sagaMiddleware) => {
    sagaMiddleware.run(routeHomeSage);
    sagaMiddleware.run(routingChangeSaga);
    sagaMiddleware.run(todoDeleteSaga);
    sagaMiddleware.run(todoEditedSaga);
    sagaMiddleware.run(todoLoadSaga);
    sagaMiddleware.run(todoSaveSaga);
};