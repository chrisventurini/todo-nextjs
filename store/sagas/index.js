import routingSaga from './routingSaga';
import todoSaveSaga from './todoSaveSaga';
import todoEditedSaga  from './todoUpdateSaga';

export default (sagaMiddleware) => {
    sagaMiddleware.run(routingSaga);
    sagaMiddleware.run(todoEditedSaga);
    sagaMiddleware.run(todoSaveSaga)
};