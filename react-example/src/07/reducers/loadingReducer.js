import { RESET_LOADING, SET_LOADING } from '../actions/loadingAction';

const initState = false;

export default function (state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_LOADING: {
            return payload;
        }
        case RESET_LOADING: {
            return initState;
        }
        default:
            return state;
    }
}
