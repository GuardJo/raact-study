import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { resetLoading, setLoading } from './actions/loadingAction';
import { setUser } from './actions/userAction';
import { setCollection } from './actions/collectionAction';

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

        this.store.dispatch(
            setCollection([
                { id: 1, name: 'test1', age: 20 },
                { id: 2, name: 'test2', age: 30 },
            ]),
        );
    }

    render() {
        return <Provider store={this.store}>리덕스 예제</Provider>;
    }
}
