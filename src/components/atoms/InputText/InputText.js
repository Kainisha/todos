import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputTextStyled = styled.input`

`;

const InputText = ({ onChange }) => {
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        setValue(inputValue);
        onChange(inputValue);
    }

    return (
        <InputTextStyled type="text" value={value} onChange={handleChange} />
    )
};

InputText.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default InputText;
