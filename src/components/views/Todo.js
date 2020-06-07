import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TodoWrapper from 'components/molecules/TodoWrapper/TodoWrapper';
import ErrorText from 'components/atoms/ErrorText/ErrorText';
import RequestLoader from 'components/atoms/RequestLoader/RequestLoader';
import NewTodoForm from 'components/molecules/NewTodoForm/NewTodoForm';

const TodoStyled = styled.div`
    padding: 1rem;
`;

const MAX_TODOS = 10;

const Todo = ({ todos }) => {
    const showForm = todos.length < MAX_TODOS;

    return (
        <TodoStyled>
            <ErrorText />
            <RequestLoader />
                { showForm && <NewTodoForm /> }
            <TodoWrapper />
        </TodoStyled>
    )
}

Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

export default connect(mapStateToProps)(Todo);
