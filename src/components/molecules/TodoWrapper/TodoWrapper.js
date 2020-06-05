import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TodoItem from 'components/atoms/TodoItem/TodoItem';
import { getTodos as getTodosAction } from 'actions';

const TodoWrapperStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
`;

const TodoWrapper = ({ todos, getTodos }) => {
    useEffect(() => {
        getTodos();
    }, []);

    return (
        <TodoWrapperStyled>
            { todos.map(({ title, completed, id }) => (
                <TodoItem title={title} completed={completed} key={`todo-${id}`} />
            )) }
        </TodoWrapperStyled>
    )
};

TodoWrapper.propTypes = {
    todos: PropTypes.array.isRequired,
    getTodos: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => dispatch(getTodosAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoWrapper);
