export const SET_LOADING = 'loading/SET_LOADING';
export const RESET_LOADING = 'loading/RESET_LOADING';

export const setLoading = (loading) => {
    return {
        type: SET_LOADING,
        payload: loading,
    };
};

export const resetLoading = () => {
    return {
        type: RESET_LOADING,
    };
};
