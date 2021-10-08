import { createAction, handleActions } from "redux-actions";

const CHANGE_VISIBLE = 'marker/VISIBLE';

export const changeState = createAction(
    CHANGE_VISIBLE, 
    value => value
);

const initialState = {
    visible: null
};

const marker = handleActions(
    {
        [CHANGE_VISIBLE]: (state, { payload: value }) => ({
            ...state,
            visible: value
        }),
    },
    initialState,
);

export default marker;