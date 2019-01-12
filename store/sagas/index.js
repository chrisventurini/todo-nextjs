import routingSaga from './routingSaga';
import todoDeleteSaga from './todoDeleteSaga';
import todoEditedSaga  from './todoUpdateSaga';
import todoInitialLoadSaga from './todoInitialLoadSaga';
import todoSaveSaga from './todoSaveSaga';

export default (sagaMiddleware) => {
    sagaMiddleware.run(routingSaga);
    sagaMiddleware.run(todoDeleteSaga);
    sagaMiddleware.run(todoEditedSaga);
    sagaMiddleware.run(todoInitialLoadSaga);
    sagaMiddleware.run(todoSaveSaga);
};