import { SET_AGE, SET_COLLECTION } from '../actions/collectionAction';

const initState = {
    ids: [],
    entities: [],
};

export default function (state = initState, action) {
    const { type, payload } = action;

    switch (type) {
        case SET_COLLECTION: {
            const ids = payload.map((entity) => entity['id']);
            const entities = payload.reduce((finalEntities, entity) => {
                return {
                    ...finalEntities,
                    [entity['id']]: entity,
                };
            }, {});

            return {
                ...state,
                ids,
                entities,
            };
        }
        case SET_AGE: {
            const { id, age } = payload;
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [id]: {
                        ...state.entities[id],
                        age,
                    },
                },
            };
        }
        default:
            return state;
    }
}
