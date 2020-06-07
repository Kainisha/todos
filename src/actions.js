export const SET_TODOS = 'SET_TODOS';
export const GET_TODOS = 'GET_TODOS';
export const PUT_TODO = 'PUT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const POST_TODO = 'POST_TODO';
export const SET_ERROR = 'SET_ERROR';
export const SET_REQUEST = 'SET_REQUEST';
export const UPDATE_TODOS = 'UPDATE_TODOS';
export const DELETE_TODOS = 'DELETE_TODOS';

export const getTodos = () => ({
    type: GET_TODOS
});

export const putTodo = ({ id, title, completed }) => ({
    type: PUT_TODO,
    payload: { id, title, completed }
});

export const deleteTodo = ({ id }) => ({
    type: DELETE_TODO,
    payload: { id }
});

export const postTodo = ({ title, completed }) => ({
    type: POST_TODO,
    payload: { title, completed }
});

export const setError = ({ isError, errorText }) => ({
    type: SET_ERROR,
    payload: { isError, errorText }
});

export const setRequest = ({ isRequest }) => ({
    type: SET_REQUEST,
    payload: { isRequest }
});

export const setTodos = ({ todos }) => ({
    type: SET_TODOS,
    payload: { todos }
});

export const updateTodos = ({ todo }) => ({
    type: UPDATE_TODOS,
    payload: todo
});

export const deleteTodos = ({ id }) => ({
    type: DELETE_TODOS,
    payload: { id }
})
