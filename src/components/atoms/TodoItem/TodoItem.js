import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { putTodo, deleteTodo } from 'actions';

library.add(faCheck, faTrash);

const TodoItemStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 2rem 2rem;
    align-items: center;
    border: 1px solid lightgray;
`;

const TodoItemTitleStyled = styled.div`
    color: black;
    padding: 0.5rem;

    ${({ completed }) => completed && css`
        color: white;
        background-color: green;
        border-color: darkgreen;
    `}
`;

const TodoItemCompleteStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
        background-color: green;
        color: white;
    };

    ${({ completed }) => completed && css`
        background-color: green;
    `}
`;

const TodoItemRemoveStyled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

    &:hover {
        background-color: red;
        color: white;
    }

    ${({ completed }) => !completed && css`
        background-color: gray;
        cursor: not-allowed;
    `}
`;

const TodoItem = ({ title, completed, id, updateTodo, deleteTodo }) => {
    const handleUpdate = () => updateTodo({ title, id, completed: !completed });
    const handleDelete = () => {
        if (!completed) {
            return
        }

        deleteTodo({ id })
    }

    return (
        <TodoItemStyled>
            <TodoItemTitleStyled completed={completed}>
                { title }
            </TodoItemTitleStyled>
            <TodoItemCompleteStyled completed={completed}>
                <FontAwesomeIcon icon="check" size="sm" onClick={handleUpdate} />
            </TodoItemCompleteStyled>
            <TodoItemRemoveStyled completed={completed} onClick={handleDelete}>
                <FontAwesomeIcon icon="trash" size="xs" />
            </TodoItemRemoveStyled>
        </TodoItemStyled>
    )
}

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateTodo: ({ completed, title, id }) => dispatch(putTodo({ completed, title, id })),
        deleteTodo: ({ id }) => dispatch(deleteTodo({ id }))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);
