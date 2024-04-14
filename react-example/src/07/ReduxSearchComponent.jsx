import React, { PureComponent } from 'react';
import configureStore from './configureStore';
import SearchFilterInputContainter from './container/SearchFilterInputContainter';
import SearchFilterResetContainer from './container/SearchFilterResetContainer';
import { Provider } from 'react-redux';
import SearchFilterResultContainer from './container/SearchFilterResultContainer';
import { setCollection } from './actions/collectionAction';

class ReduxSearchComponent extends PureComponent {
    store = configureStore({});

    componentDidMount() {
        this.store.dispatch(
            setCollection([
                { id: 1, name: 'test1', age: 20 },
                { id: 2, name: 'test2', age: 30 },
            ]),
        );
    }

    render() {
        return (
            <Provider store={this.store}>
                <SearchFilterInputContainter type="number" name="id" label="아이디 검색" />
                <SearchFilterInputContainter type="text" name="name" label="이름 검색" />
                <SearchFilterInputContainter type="number" name="age" label="나이 검색" />
                <SearchFilterResetContainer>RESET</SearchFilterResetContainer>
                <SearchFilterResultContainer />
            </Provider>
        );
    }
}

ReduxSearchComponent.propTypes = {};

export default ReduxSearchComponent;
