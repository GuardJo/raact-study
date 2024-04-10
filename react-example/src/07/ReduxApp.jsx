import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { resetLoading, setLoading } from './actions/loadingAction';
import { setUser } from './actions/userAction';
import { setAge, setCollection } from './actions/collectionAction';
import PresentationComponent from './PresentationComponent';
import ContainerComponent from './container/ContainerComponent';

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

        this.getDataFromDB();
        this.updateAgeFromDB(1, 50);
    }

    // Graph DB 데이터 조회
    getDataFromDB() {
        const { collection } = this.store.getState();
        const { ids, entities } = collection;
        const originalPayload = ids.map((id) => entities[id]);
        console.log(originalPayload);
    }

    // Graph DB 특정 데이터 수정
    updateAgeFromDB(id, age) {
        this.store.dispatch(setAge(id, age));
    }

    render() {
        return (
            <Provider store={this.store}>
                화면 컴포넌트 : <PresentationComponent userName="화면 컴포넌트" />
                <br />
                데이터 컴포넌트 : <ContainerComponent id={2} />
            </Provider>
        );
    }
}
