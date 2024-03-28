import React from 'react';
import { PropTypes } from 'prop-types';

export default WrappedComponent => {
    const {displayName, name : componentName} = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function withLoadingContext(props, context) {
        const {loading, setLoading} = context;
    
        return (
            <WrappedComponent {...props} loading={loading} setLoading={setLoading}></WrappedComponent>
        );
    };

    withLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
    withLoadingContext.contextTypes = {
        loading: PropTypes.bool,
        setLoading: PropTypes.func
    };

    return withLoadingContext;
};