import { takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as mapsAPI from '../lib/api/maps';

const [
    LIST_MAPS_ALL,
    LIST_MAPS_ALL_SUCCESS,
    LIST_MAPS_ALL_FAILURE,
] = createRequestActionTypes('maps/LIST_MAPS_ALL');

const [
    LIST_MAPS_TYPE,
    LIST_MAPS_TYPE_SUCCESS,
    LIST_MAPS_TYPE_FAILURE
] = createRequestActionTypes('maps/LIST_MAPS_TYPE');

const [
    LIST_MAPS_GU,
    LIST_MAPS_GU_SUCCESS,
    LIST_MAPS_GU_FAILURE
] = createRequestActionTypes('maps/LIST_MAPS_GU');

const [
    LIST_MAPS_GU_TYPE,
    LIST_MAPS_GU_TYPE_SUCCESS,
    LIST_MAPS_GU_TYPE_FAILURE
] = createRequestActionTypes('maps/LIST_MAPS_GU_TYPE');

export const listAll = createAction(LIST_MAPS_ALL);
export const listType = createAction(LIST_MAPS_TYPE, type_nm => type_nm);
export const listGu = createAction(LIST_MAPS_GU, gu_nm => gu_nm);
export const listGuType = createAction(LIST_MAPS_GU_TYPE, ({
    gu,
    type
}) => ({
    gu,
    type
}));

export const listAllSaga = createRequestSaga(LIST_MAPS_ALL, mapsAPI.getAll);
export const listTypeSaga = createRequestSaga(LIST_MAPS_TYPE, mapsAPI.getListByType);
export const listGuSaga = createRequestSaga(LIST_MAPS_GU, mapsAPI.getListByGu);
export const listGuTypeSaga = createRequestSaga(LIST_MAPS_GU_TYPE, mapsAPI.getListByGuType);

export function* mapsSaga() {
    yield takeLatest(LIST_MAPS_ALL, listAllSaga);
    yield takeLatest(LIST_MAPS_TYPE, listTypeSaga);
    yield takeLatest(LIST_MAPS_GU, listGuSaga);
    yield takeLatest(LIST_MAPS_GU_TYPE, listGuTypeSaga);
}

const initialState = {
    maps: null,
    error: null,
};

const maps = handleActions(
    {
        [LIST_MAPS_ALL_SUCCESS]: (state, { payload: maps }) => ({
            ...state,
            maps,
        }),
        [LIST_MAPS_ALL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [LIST_MAPS_TYPE_SUCCESS]: (state, { payload: maps }) => ({
            ...state,
            maps,
        }),
        [LIST_MAPS_TYPE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [LIST_MAPS_GU_SUCCESS]: (state, { payload: maps }) => ({
            ...state,
            maps,
        }),
        [LIST_MAPS_GU_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [LIST_MAPS_GU_TYPE_SUCCESS]: (state, { payload: maps }) => ({
            ...state,
            maps,
        }),
        [LIST_MAPS_GU_TYPE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default maps;