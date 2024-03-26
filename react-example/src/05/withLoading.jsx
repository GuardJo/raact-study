import React from 'react';

export default function(loadingMessage = 'loading...') {
    return function withLoading(WrappedComponent) {
        const {displayName, name : componentName} = WrappedComponent;
        const wrappedComponentName = displayName || componentName;
    
        function withLoading({isLoading, ...others}) {
            if (isLoading) {
                return loadingMessage;
            }
        
            return (
                <WrappedComponent {...others}></WrappedComponent>
            );
        };
    
        withLoading.displayName = `withLoading(${wrappedComponentName})`;
    
        return withLoading;
    };
};