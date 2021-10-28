import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as messageAPI from '../lib/api/message';
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = 'message/INITIALIZE';

const CHANGE_FIELD = 'message/CHANGE_FIELD';

const [
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILURE
] = createRequestActionTypes('message/SEND_MESSAGE');

export const initialize = createAction(INITIALIZE, form => form);

export const changeField = createAction(CHANGE_FIELD, ({
    key,
    value
}) => ({
    key,
    value
}));

export const sendMessage = createAction(SEND_MESSAGE, ({
    sender,
    receiver,
    content,
}) => ({
    sender,
    receiver,
    content
}));

const sendMessageSaga = createRequestSaga(SEND_MESSAGE, messageAPI.sendMessage);

export function* messageSaga() {
    yield takeLatest(SEND_MESSAGE, sendMessageSaga);
};

const initialState = {
    sender: null,
    receiver: null,
    content: null,
    result: null,
    error: null,
};

const message = handleActions(
    {
        [INITIALIZE]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form]
        }),
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value
        }),
        [SEND_MESSAGE_SUCCESS]: (state, { payload: result }) => ({
            ...state,
            result
        }),
        [SEND_MESSAGE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        })
    },
    initialState
);

export default message;