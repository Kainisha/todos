import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import url from 'api';
import { GET_TODOS, PUT_TODO, DELETE_TODO, POST_TODO, setError, setRequest, setTodos } from 'actions';

const getTodosFromState = (state) => state.todos;

const getRequest = async () => {
    return await axios.get(`${url}/todos?_limit=10`);
};

const putRequest = async ({id, data}) => {
    return await axios.put(`${url}/todos/${id}`, data);
};

const deleteRequest = async ({ id }) => {
    return await axios.delete(`${url}/todos/${id}`);
}

const postRequest = async ({ data}) => {
    return await axios.post(`${url}/todos`, data);
}

function* getTodos () {
    yield put(setError({isError: false, errorText: ''}));
    yield put(setRequest({ isRequest: true }));

    try {
        const response = yield call(getRequest)
        yield put(setTodos({ todos: response.data }));
        yield put(setRequest({ isRequest: false }));
    } catch (error) {
        yield put(setError({ isError: true, errorText: error.message }));
        yield put(setRequest({ isRequest: false }));
    }
};

function* putTodo ({ payload: { id, title, completed }}) {
    yield put(setError({isError: false, errorText: ''}));
    yield put(setRequest({ isRequest: true }));

    try {
        const data = { title, completed };
        const response = yield call(putRequest, { id, data });
        yield put(setRequest({ isRequest: false }));

        const { data: updatedTodo } = response;

        const todosState = yield select(getTodosFromState);
        const updatedTodos = todosState.map(todo => {
            if (todo.id !== id) {
                return todo;
            }

            return Object.assign(todo, updatedTodo);
        });

        yield put(setTodos({ todos: updatedTodos}));
    } catch (error) {
        yield put(setError({ isError: true, errorText: error.message }));
        yield put(setRequest({ isRequest: false }));
    }
}

function* deleteTodo ({ payload: { id }}) {
    yield put(setError({isError: false, errorText: ''}));
    yield put(setRequest({ isRequest: true }));

    try {
        yield call(deleteRequest, { id });
        yield put(setRequest({ isRequest: false }));

        const todosState = yield select(getTodosFromState);
        const updatedTodos = todosState.filter(todo => todo.id !== id);

        yield put(setTodos({ todos: updatedTodos}));
    } catch (error) {
        yield put(setError({ isError: true, errorText: error.message }));
        yield put(setRequest({ isRequest: false }));
    }
}

function* postTodo ({ payload: { title, completed } }) {
    yield put(setError({isError: false, errorText: ''}));
    yield put(setRequest({ isRequest: true }));

    try {
        const data = { title, completed }
        const response = yield call(postRequest, { data });

        yield put(setRequest({ isRequest: false }));

        const { data: newTodo } = response;
        newTodo.userId = 1;
        const todosState = yield select(getTodosFromState);

        yield put(setTodos({ todos: [...todosState, newTodo] }));
    } catch (error) {
        yield put(setError({ isError: true, errorText: error.message }));
        yield put(setRequest({ isRequest: false }));
    }
}

function* saga() {
    yield takeLatest(GET_TODOS, getTodos);
    yield takeLatest(PUT_TODO, putTodo);
    yield takeLatest(DELETE_TODO, deleteTodo);
    yield takeLatest(POST_TODO, postTodo);
};

export default saga;
