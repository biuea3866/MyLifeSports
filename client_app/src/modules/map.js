import { createAction, handleActions } from "redux-actions";

const [CHANGE_MAP] = 'map/CHANGE_MAP';

export const changeMap = createAction(
    CHANGE_MAP, 
    value => value
);

const initialState = {
    map: null,
    error: null,
};

const map = handleActions(
    {
        [CHANGE_MAP]: (state, { payload: map }) => ({
            ...state,
            map,
        }),
    },
    initialState,
);

export default map;