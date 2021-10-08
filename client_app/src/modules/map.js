import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes
} from '../lib/createRequestSaga';
import * as mapsAPI from '../lib/api/maps';
import { takeLatest } from "@redux-saga/core/effects";

const [
    READ_MAP,
    READ_MAP_SUCCESS,
    READ_MAP_FAILURE,
] = createRequestActionTypes('map/READ_MAP');

export const readMap = createAction(READ_MAP, id => id);

const readMapSaga = createRequestSaga(READ_MAP, mapsAPI.getOne);
export function* mapSaga() {
    yield takeLatest(READ_MAP, readMapSaga);
}

const initialState = {
    map: null,
    error: null,
};

const map = handleActions(
    {
        [READ_MAP_SUCCESS]: (state, { payload: map }) => ({
            ...state,
            map,
        }),
        [READ_MAP_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default map;