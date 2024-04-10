export const SET_COLLECTION = 'collections/SET_COLLECTION';
export const SET_AGE = 'collections/SET_AGE';

export const setCollection = (collection) => {
    return {
        type: SET_COLLECTION,
        payload: collection,
    };
};

export const setAge = (id, age) => {
    return {
        type: SET_AGE,
        payload: {
            id,
            age,
        },
    };
};
