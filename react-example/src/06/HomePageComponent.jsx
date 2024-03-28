import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CustomBotton from '../04/CustomBotton';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProvider from './LoadingProvider';

function RowComponent() {
    return (
        <CustomBotton label='test1'>Button</CustomBotton>
    );
}

function ButtonComponent() {
    return (
        <ButtonWithLoadingContext label='test2'>Button2</ButtonWithLoadingContext>
    );
}

function TableComponent() {
    return (
        <table>
            <RowComponent/>
            <ButtonComponent/>
        </table>
    );
}

class HomePageComponent extends PureComponent {
    render() {
        return (
            <LoadingProvider>
                <TableComponent/>
                <ButtonWithLoadingContext label='test3'>상태 변경</ButtonWithLoadingContext>
            </LoadingProvider>
        );
    }
}

HomePageComponent.childContextTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func
};

export default HomePageComponent;