import React from 'react';
import PropTypes from 'prop-types';

SFC.propTypes = {
    somePropValue: PropTypes.any,
};
SFC.defaultProps = {
    somePropValue: 'default value',
};

function SFC(props, context) {
    const { somePropValue } = props;
    const { someContextValue } = context;

    return (
        <div>
            <h1>Hello, {somePropValue}</h1>
        </div>
    );
}

export default SFC;
