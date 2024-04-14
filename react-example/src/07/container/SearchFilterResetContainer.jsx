import { connect } from 'react-redux';
import { resetFilter } from '../actions/searchFilterAction';
import CustomBotton from '../../04/CustomBotton';

const mapStateToProps = (state) => {
    const disabled = Object.values(state.searchFilter).reduce(
        (result, value) => result && !value,
        true,
    );

    return {
        disabled,
    };
};

const mapDispatchToProps = {
    onPress: resetFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomBotton);
