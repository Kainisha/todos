import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoItemStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 2rem 2rem;
    padding: 0.5rem;
    align-items: center;
    border: 1px solid lightgray;
`;

const TodoItemTitleStyled = styled.div`
    color: grey;
`;

const TodoItemCompleteStyled = styled.div`
    height: 100%;
    width: 100%;
`;

const TodoItemRemoveStyled = styled.div`
    height: 100%;
    width: 100%;
`;

const TodoItem = ({ title, completed }) => {
    return (
        <TodoItemStyled>
            <TodoItemTitleStyled>
                { title }
            </TodoItemTitleStyled>
            <TodoItemCompleteStyled>
                +
            </TodoItemCompleteStyled>
            <TodoItemRemoveStyled>
                X
            </TodoItemRemoveStyled>
        </TodoItemStyled>
    )
}

TodoItem.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}

export default TodoItem;
