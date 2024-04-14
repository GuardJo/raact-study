export const SET_FILTER = 'searchFilter/SET_FILTER';
export const RESET_FILTER = 'searchFilter/RESET_FILTER';

export const setFilter = (filterName, value) => {
    return {
        type: SET_FILTER,
        payload: {
            filterName,
            value,
        },
    };
};

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    };
};
