import React from 'react';
import styled from 'styled-components';
import TodoWrapper from 'components/molecules/TodoWrapper/TodoWrapper';

const TodoStyled = styled.div`
    padding: 1rem;
`;

const Todo = () => {
    return (
        <TodoStyled>
            <TodoWrapper />
        </TodoStyled>
    )
}

export default Todo;
