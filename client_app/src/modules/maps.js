import { takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as mapsAPI from '../lib/api/maps';

const INITIALIZE = 'maps/INITIALIZE';

const CHANGE_FIELD = 'maps/CHANGE_FIELD';

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

export const initialize = createAction(INITIALIZE, form => form);

export const changeField = createAction(CHANGE_FIELD, ({
    key,
    value
}) => ({
    key,
    value
}));

export const listAll = createAction(LIST_MAPS_ALL);

export const listType = createAction(LIST_MAPS_TYPE, type_nm => type_nm);

export const listGu = createAction(LIST_MAPS_GU, gu_nm => gu_nm);

export const listGuType = createAction(LIST_MAPS_GU_TYPE, ({
    gu_nm,
    type_nm
}) => ({
    gu_nm,
    type_nm
}));

const listAllSaga = createRequestSaga(LIST_MAPS_ALL, mapsAPI.getAll);
const listTypeSaga = createRequestSaga(LIST_MAPS_TYPE, mapsAPI.getListByType);
const listGuSaga = createRequestSaga(LIST_MAPS_GU, mapsAPI.getListByGu);
const listGuTypeSaga = createRequestSaga(LIST_MAPS_GU_TYPE, mapsAPI.getListByGuType);

export function* mapsSaga() {
    yield takeLatest(LIST_MAPS_ALL, listAllSaga);
    yield takeLatest(LIST_MAPS_TYPE, listTypeSaga);
    yield takeLatest(LIST_MAPS_GU, listGuSaga);
    yield takeLatest(LIST_MAPS_GU_TYPE, listGuTypeSaga);
}

const initialState = {
    maps: null,
    type_nm: null,
    gu_nm: null,
    error: null,
};

const maps = handleActions(
    {
        [INITIALIZE]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form]
        }),
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value
        }),
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