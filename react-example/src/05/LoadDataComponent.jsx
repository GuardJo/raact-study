import React from "react";
import withLoading from "./withLoading";
import withState from "recompose/withState";
import compose from "recompose/compose";

const withLoadData = withState('isLoading', 'setIsLoading', false);

function DataComponent() {
    return (
        <div>로딩 완료</div>
    );
}

// const ComponentWithLoading = withLoading('loading...')(Component);
// const ComponentWithLoadData = withLoadData(Component);

const withLoadingAndLoadData = compose(withLoadData, withLoading('loading...'));

export const LoadDataComponent = withLoadingAndLoadData(DataComponent);