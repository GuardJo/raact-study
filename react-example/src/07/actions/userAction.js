export const SET_USER = 'use/SET_USER';

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};
