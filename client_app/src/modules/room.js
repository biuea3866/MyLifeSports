import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as messageAPI from '../lib/api/message';
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = 'room/INITIALIZE';

const CHANGE_FIELD = 'room/CHANGE_FIELD';

const [
    INIT_ROOM,
    INIT_ROOM_SUCCESS,
    INIT_ROOM_FAILURE
] = createRequestActionTypes('room/INIT_ROOM');

const [
    GET_ROOM,
    GET_ROOM_SUCCESS,
    GET_ROOM_FAILURE
] = createRequestActionTypes('room/GET_ROOM');

const [
    CHECK_ROOM,
    CHECK_ROOM_SUCCESS,
    CHECK_ROOM_FAILURE
] = createRequestActionTypes('room/CHECK_ROOM');

const [
    DELETE_ROOM,
    DELETE_ROOM_SUCCESS,
    DELETE_ROOM_FAILURE
] = createRequestActionTypes('room/DELETE_ROOM');

export const initialize = createAction(INITIALIZE, form => form);

export const changeField = createAction(CHANGE_FIELD, ({
    key,
    value
}) => ({
    key,
    value
}));

export const initRoom = createAction(INIT_ROOM, ({
    user_a,
    user_b
}) => ({
    user_a,
    user_b
}));

export const getRoom = createAction(GET_ROOM, roomId => roomId);

export const checkRoom = createAction(CHECK_ROOM, ({
    user_a,
    user_b
}) => ({
    user_a,
    user_b
}));

export const deleteRoom = createAction(DELETE_ROOM, roomId => roomId);

const initRoomSaga = createRequestSaga(INIT_ROOM, messageAPI.initRoom);

const checkRoomSaga = createRequestSaga(CHECK_ROOM, messageAPI.checkRoom);

const getRoomSaga = createRequestSaga(GET_ROOM, messageAPI.getRoom);

const deleteRoomSaga = createRequestSaga(DELETE_ROOM, messageAPI.deleteRoom);

export function* roomSaga() {
    yield takeLatest(INIT_ROOM, initRoomSaga);
    yield takeLatest(CHECK_ROOM, checkRoomSaga);
    yield takeLatest(GET_ROOM, getRoomSaga);
    yield takeLatest(DELETE_ROOM, deleteRoomSaga);
}; 

const initialState = {
    user_a: null,
    user_b: null,
    roomId: 'DEFAULT_ID',
    room: null,
    result: null,
    error: null
};

const room = handleActions(
    {
        [INITIALIZE]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form]
        }),
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value
        }),
        [INIT_ROOM_SUCCESS]: (state, { payload: roomId }) => ({
            ...state,
            roomId
        }),
        [INIT_ROOM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [GET_ROOM_SUCCESS]: (state, { payload: room }) => ({
            ...state,
            room
        }),
        [GET_ROOM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [CHECK_ROOM_SUCCESS]: (state, { payload: roomId }) => ({
            ...state,
            roomId
        }),
        [CHECK_ROOM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [DELETE_ROOM_SUCCESS]: (state, { payload: result }) => ({
            ...state,
            result
        }),
        [DELETE_ROOM_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default room;