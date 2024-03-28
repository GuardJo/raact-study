import React, { PureComponent } from 'react';
import { ButtionWithLoading2Context, ButtonWithDefaultLoadingContext } from './ButtonWithLoadingContextAndKey';
import LoadingProviderWithKey from './LoadingProviderWithKey';

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey('loading2');

function TableComponent() {
    return (
        <table>
            <ButtonWithDefaultLoadingContext>default</ButtonWithDefaultLoadingContext>
            <ButtionWithLoading2Context>loading2</ButtionWithLoading2Context>
        </table>
    );
}

class HomePageComponentWithKey extends PureComponent {
    render() {
        return (
            <LoadingProvider1>
                <LoadingProvider2>
                    <TableComponent/>   
                </LoadingProvider2>
            </LoadingProvider1>
        );
    }
}

export default HomePageComponentWithKey;