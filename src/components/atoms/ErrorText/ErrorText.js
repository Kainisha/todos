import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux';

const show = keyframes`
    to {
        opacity: 1;
    }
`;

const ErrorTextStyled = styled.div`
    margin: 1rem 0;
    border: 2px solid darkred;
    border-radius: 0.5rem;
    background-color: red;
    color: white;
    font-weight: 600;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    opacity: 0;
    transform-origin: top;
    animation: ${show} 300ms linear forwards;
`;

const ErrorText = ({ isError, errorText }) => {
    return (
        <>
            { isError && <ErrorTextStyled>{ errorText }</ErrorTextStyled> }
        </>
    )
};

ErrorText.propTypes = {
    isError: PropTypes.bool.isRequired,
    errorText: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        isError: state.isError,
        errorText: state.errorText
    }
}

export default connect(mapStateToProps)(ErrorText);
