import { SET_ERROR, SET_REQUEST, SET_TODOS, UPDATE_TODOS, DELETE_TODOS } from 'actions'

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
        case UPDATE_TODOS: {
            const { todos } = state;
            const updatedTodos = todos.map(todo => {
                if (todo.id !== payload.id) {
                    return todo;
                }

                const updatedTodo = Object.assign(todo, payload)
                return updatedTodo;
            })

            return {
                ...state,
                todos: updatedTodos
            }
        }
        case DELETE_TODOS: {
            const { todos } = state;
            const { id } = payload;
            const updatedTodos = todos.filter(todo => todo.id !== id);

            return {
                ...state,
                todos: updatedTodos
            }
        }
        default: {
            return state;
        }
    }
}

export default TodosReducer
