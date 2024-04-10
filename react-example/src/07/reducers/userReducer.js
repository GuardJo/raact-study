export default function (state = {}, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SET_USER': {
            return {
                ...state,
                ...payload,
            };
        }
        default:
            return state;
    }
}
