import saga from 'saga.js';
import todosReducer from 'reducer';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(todosReducer, middleware);

sagaMiddleware.run(saga);

export default store;
