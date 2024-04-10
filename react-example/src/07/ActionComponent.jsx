import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CustomBotton from '../04/CustomBotton';
import { setCollection } from './actions/collectionAction';

class ActionComponent extends PureComponent {
    render() {
        const { setLoading, resetLoading, setUser, setCollection, setAge } = this.props;

        const collection = [
            { id: 1, name: 'Tester1', age: 10 },
            { id: 2, name: 'Tester2', age: 30 },
            { id: 3, name: 'Tester3', age: 40 },
        ];

        return (
            <>
                <CustomBotton onPress={() => setLoading(true)}>setLoading</CustomBotton>
                <CustomBotton onPress={() => resetLoading()}>resetLoading</CustomBotton>
                <CustomBotton onPress={() => setUser({ name: 'kyeongho', age: 29 })}>
                    setUser
                </CustomBotton>
                <CustomBotton onPress={() => setCollection(collection)}>setCollection</CustomBotton>
                <CustomBotton onPress={() => setAge(2, 19)}>setAge</CustomBotton>
            </>
        );
    }
}

ActionComponent.propTypes = {
    setLoading: PropTypes.func,
    resetLoading: PropTypes.func,
    setUser: PropTypes.func,
    setCollection: PropTypes.func,
    setAge: PropTypes.func,
};

export default ActionComponent;
