import { call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import url from 'api';
import { GET_TODOS, PUT_TODO, DELETE_TODO, POST_TODO, updateTodos, setError, setRequest, setTodos, deleteTodos } from 'actions';

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
        const { data: todo } = response;
        yield put(setRequest({ isRequest: false }));
        yield put(updateTodos({ todo }));
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
        yield put(deleteTodos({ id }));
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

        //todosState.push(newTodo);
        //console.log(todosState)
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
