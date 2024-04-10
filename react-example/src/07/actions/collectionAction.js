export const SET_COLLECTION = 'collections/SET_COLLECTION';

export const setCollection = (collection) => {
    return {
        type: SET_COLLECTION,
        payload: collection,
    };
};
