import todoSubmittedSaga from './todoSubmittedSaga';
import todoEditedSaga  from './todoEditedSaga';

export default (sagaMiddleware) => {
    sagaMiddleware.run(todoEditedSaga);
    sagaMiddleware.run(todoSubmittedSaga)
};