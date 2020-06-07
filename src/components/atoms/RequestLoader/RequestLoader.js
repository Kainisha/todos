import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faSpinner);

const RequestLoaderStyled = styled.div`
    position: fixed;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.15);
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RequestLoader = ({ isRequest }) => {
    return (
        <>
            { isRequest &&
                <RequestLoaderStyled>
                    <FontAwesomeIcon icon="spinner" spin size="2x" />
                </RequestLoaderStyled>
            }
        </>
    )
}

RequestLoader.propTypes = {
    isRequest: PropTypes.bool.isRequired
}

const mapStateToProps = ({ isRequest }) => {
    return { isRequest }
}

export default connect(mapStateToProps)(RequestLoader);
