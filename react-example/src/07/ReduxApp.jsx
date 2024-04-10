import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'SET_LOADING': {
            return {
                ...state,
                loading: payload,
            };
        }
        default:
            return state;
    }
};

export default class ReduxApp extends PureComponent {
    store = createStore(
        reducer,
        { loading: false, name: 'Test 상태' },
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );

    componentDidMount() {
        this.store.dispatch({
            type: 'SET_LOADING',
            payload: true,
        });
    }

    render() {
        return <Provider store={this.store}>리덕스 예제</Provider>;
    }
}
