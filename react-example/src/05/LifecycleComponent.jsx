import React from "react";
import lifecycle from "recompose/lifecycle";
import withLoading from "./withLoading";
import compose from "recompose/compose";

function Page({content}) {
    return (
        <div>
            페이지 로딩 완료
            <p>{content}</p>
        </div>
    );
}

const withLoadLifecycle = lifecycle({
    state: {isLoading: true, content: ''},
    componentDidMount: function() {
        if (this.props.loadData) {
            this.props.loadData().then(content => this.setState({isLoading: false, content }));
        }
    },
});


export const LifecycleLoadPage = compose(withLoadLifecycle, withLoading('loading...'))(Page);