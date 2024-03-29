import React from "react";
import { DEFAULT_KEY, contextPropTypes } from "./LoadingProviderWithKey";

export const loadingPropTypes = contextPropTypes;

export default (contextKey = DEFAULT_KEY) => WrappedComponent => {
    const {displayName, name: componentName} = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function withLoadingContext(props, context) {
        const {loading, setLoading} = context[contextKey];
        return (
            <WrappedComponent {...props} loading={loading} setLoading={setLoading}/>
        );
    }

    withLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
    withLoadingContext.contextTypes = {
        [contextKey]: contextPropTypes
    };

    return withLoadingContext;
}