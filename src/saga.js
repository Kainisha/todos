import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import url from 'api';
import { GET_TODOS } from 'actions';

const fetchTodos = async () => {
    const response = await axios.get(`${url}/todos`)
    return response
}

function* getTodos () {
    try {
        const response = yield call(fetchTodos)
        console.log(response.data)
    } catch (error) {

    }
}

function* saga() {
    yield takeLatest(GET_TODOS, getTodos)
};

export default saga;
