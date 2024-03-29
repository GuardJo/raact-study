import React from "react";
import CustomBotton from "../04/CustomBotton";
import ButtonWithLoadingContext from "./ButtonWithLoadingContext";
import { PropTypes } from 'prop-types';
import withLoadingContextAndKey, { loadingPropTypes } from './withLoadingContextAndKey';

function ButtionWithLoadingContextAndKey(props) {
    const {loading, setLoading, children} = props;

    return (
        <CustomBotton onPress={() => setLoading(!loading)}>
            {loading ? 'loading...' : children}
        </CustomBotton>
    );
}

ButtonWithLoadingContext.propTypes = {
    ...loadingPropTypes,
    children: PropTypes.node
};

export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey()(ButtionWithLoadingContextAndKey);
export const ButtionWithLoading2Context = withLoadingContextAndKey('loading2')(ButtionWithLoadingContextAndKey);
