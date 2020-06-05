const initState = {
    todos: [
        {
            id: 1,
            title: 'Todo 1',
            completed: false
        },
        {
            id: 2,
            title: 'Todo 2',
            completed: true
        }
    ]
};

const TodosReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case 'ADD_TODO': {
            return {
                ...state,
                payload
            }
        }
        default: {
            return state;
        }
    }
}

export default TodosReducer
