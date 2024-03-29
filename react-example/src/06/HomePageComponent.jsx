import React, { PureComponent } from 'react';
import ButtonWithLoadingContext from './ButtonWithLoadingContext';
import LoadingProvider from './LoadingProvider';

function TableComponent() {
    return (
        <table>
            <ButtonWithLoadingContext label='test2'>Button2</ButtonWithLoadingContext>
            <ButtonWithLoadingContext label='test3'>상태 변경</ButtonWithLoadingContext>
        </table>
    );
}

class HomePageComponent extends PureComponent {
    render() {
        return (
            <LoadingProvider>
                <TableComponent/>
            </LoadingProvider>
        );
    }
}

export default HomePageComponent;