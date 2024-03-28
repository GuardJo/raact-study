import React from 'react';
import CustomBotton from '../04/CustomBotton';
import { PropTypes } from 'prop-types';
import withLoadingContext from './withLoadingContext';

function ButtonWithLoadingContext(props) {
    const {label, loading, setLoading} = props;
    return (
        <CustomBotton label={label} onPress={() => setLoading(!loading)}>
            {loading ? 'loading...' : label}
        </CustomBotton>
    );
}

ButtonWithLoadingContext.propTypes = {
    label: PropTypes.string,
    loading: PropTypes.bool,
    setLoading: PropTypes.func
};

export default withLoadingContext(ButtonWithLoadingContext);