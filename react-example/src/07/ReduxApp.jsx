import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

export default class ReduxApp extends PureComponent {
    store = configureStore({ loading: false });

    componentDidMount() {
        this.store.dispatch({
            type: 'SET_LOADING',
            payload: true,
        });

        this.store.dispatch({
            type: 'SET_USER',
            payload: {
                name: 'tester',
            },
        });
    }

    render() {
        return <Provider store={this.store}>리덕스 예제</Provider>;
    }
}
