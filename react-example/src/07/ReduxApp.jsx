import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

export default class ReduxApp extends PureComponent {
    store = createStore(
        state => state,
        { loading: false, name : "Test 상태"},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    render() {
        return (
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        );
    }
}