import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as mapAPI from '../lib/api/maps';
import { takeLatest } from "@redux-saga/core/effects";

const [CHANGE_MAP] = 'map/CHANGE_MAP';

const [
    GET_MAP,
    GET_MAP_SUCCESS,
    GET_MAP_FAILURE
] = createRequestActionTypes('map/GET_MAP');

export const changeMap = createAction(
    CHANGE_MAP, 
    value => value
);

export const readMap = createAction(GET_MAP, _id => _id);

const readMapSaga = createRequestSaga(GET_MAP, mapAPI.getOne);

export function* mapSaga() {
    yield takeLatest(GET_MAP, readMapSaga);
};

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
        [GET_MAP_SUCCESS]: (state, { payload: map }) => ({
            ...state,
            map,
        }),
        [GET_MAP_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
    },
    initialState,
);

export default map;