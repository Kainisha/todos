import { SET_ERROR, SET_REQUEST, SET_TODOS } from 'actions'

const initState = {
    todos: [],
    isError: false,
    errorText: '',
    isRequest: false
};

const TodosReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SET_ERROR: {
            const { isError, errorText } = payload;
            return {
                ...state,
                isError,
                errorText
            }
        }
        case SET_REQUEST: {
            const { isRequest } = payload;
            return {
                ...state,
                isRequest
            }
        }
        case SET_TODOS: {
            const { todos } = payload
            return {
                ...state,
                todos
            }
        }
        default: {
            return state;
        }
    }
}

export default TodosReducer
