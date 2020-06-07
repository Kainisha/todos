import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import InputText from 'components/atoms/InputText/InputText';
import { postTodo } from 'actions';

const NewTodoFormStyled = styled.div`
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: 2px solid lightgray;
    display: grid;
    grid-template-columns: 1fr 2rem;
    grid-column-gap: 1rem;
`;

const ButtonAreaStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const AddButtonStyled = styled.button`
    background-color: green;
    color: white;
    transition: background-color 300ms ease-in-out;
    border: 1px solid darkgreen;
    height: 2rem;
    font-weight: 600;

    &:hover {
        background-color: darkgreen;
    }
`;

const NewTodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleSetTitle = (title) => setTitle(title);
    const handleAddTodo = () => addTodo({ title, completed: false });

    return (
        <NewTodoFormStyled>
            <InputText onChange={handleSetTitle} />
            <ButtonAreaStyled>
                <AddButtonStyled onClick={handleAddTodo}>
                    Add
                </AddButtonStyled>
            </ButtonAreaStyled>
        </NewTodoFormStyled>
    )
};

NewTodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: ({ title, completed }) => dispatch(postTodo({ title, completed }))
    }
};

export default connect(null, mapDispatchToProps)(NewTodoForm);
