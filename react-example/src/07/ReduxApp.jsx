import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { resetLoading, setLoading } from './actions/loadingAction';
import { setUser } from './actions/userAction';

export default class ReduxApp extends PureComponent {
    store = configureStore({ loading: false });

    componentDidMount() {
        this.store.dispatch(setLoading(true));
        this.store.dispatch(resetLoading());
        this.store.dispatch(
            setUser({
                name: 'tester',
            }),
        );
    }

    render() {
        return <Provider store={this.store}>리덕스 예제</Provider>;
    }
}
