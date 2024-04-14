import { RESET_FILTER, SET_FILTER } from '../actions/searchFilterAction';

const initState = {};

export default function (state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_FILTER: {
            const { filterName, value } = payload;
            return {
                ...state,
                [filterName]: value,
            };
        }
        case RESET_FILTER: {
            return initState;
        }
        default:
            return state;
    }
}
