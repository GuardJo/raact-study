import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent';
import { setAge, setCollection } from '../actions/collectionAction';
import { resetLoading, setLoading } from '../actions/loadingAction';
import { setUser } from '../actions/userAction';

const mapDispatchToProps = {
    setLoading,
    resetLoading,
    setUser,
    setCollection,
    setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
