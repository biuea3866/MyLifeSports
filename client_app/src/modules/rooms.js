import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as messageAPI from '../lib/api/message';
import { takeLatest } from "@redux-saga/core/effects";

const [
    GET_ROOMS,
    GET_ROOMS_SUCCESS,
    GET_ROOMS_FAILURE
] = createRequestActionTypes('rooms/GET_ROOMS');

const [
    GET_ROOMS_KEYWORD,
    GET_ROOMS_KEYWORD_SUCCESS,
    GET_ROOMS_KEYWORD_FAILURE
] = createRequestActionTypes('rooms/GET_ROOMS_KEYWORD');

export const getRooms = createAction(GET_ROOMS, nickname => nickname);

export const getRoomsKeyword = createAction(GET_ROOMS_KEYWORD, keyword => keyword);

const getRoomsSaga = createRequestSaga(GET_ROOMS, messageAPI.getRooms);

const getRoomsByKeywordSaga = createRequestSaga(GET_ROOMS_KEYWORD, messageAPI.getRoomsByKeyword);

export function* roomsSaga() {
    yield takeLatest(GET_ROOMS, getRoomsSaga);
    yield takeLatest(GET_ROOMS_KEYWORD, getRoomsByKeywordSaga);
};

const initialState = {
    rooms: null,
    error: null
};

const rooms = handleActions(
    {
        [GET_ROOMS_SUCCESS]: (state, { payload: rooms }) => ({
            ...state,
            rooms
        }),
        [GET_ROOMS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [GET_ROOMS_KEYWORD_SUCCESS]: (state, { payload: rooms }) => ({
            ...state,
            rooms
        }),
        [GET_ROOMS_KEYWORD_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
    },
    initialState,
);

export default rooms;