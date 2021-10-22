import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as postAPI from '../lib/api/post';
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = 'post/INITIALIZE';

const CHANGE_FIELD = 'post/CHANGE_FIELD';

const [
    WRITE,
    WRITE_SUCCESS,
    WRITE_FAILURE
] = createRequestActionTypes('post/WRITE');

const [
    DELETE,
    DELETE_SUCCESS,
    DELETE_FAILURE
] = createRequestActionTypes('post/DELETE');

export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({
    key,
    value
}) => ({
    key,
    value
}));

export const writePost = createAction(WRITE, ({
    type,
    title,
    content,
    userId,
    writer,
    rental
}) => ({
    type,
    title,
    content,
    userId,
    writer,
    rental
}));

export const deletePost = createAction(DELETE, _id => _id);

const writePostSaga = createRequestSaga(WRITE, postAPI.write);

const deletePostSaga = createRequestSaga(DELETE, postAPI.deleteOne);

export function* postSaga() {
    yield takeLatest(WRITE, writePostSaga);
    yield takeLatest(DELETE, deletePostSaga);
};

const initialState = {
    type: null,
    title: null,
    content: null,
    userId: null,
    writer: null,
    rental: '',
    post: null,
    postError: null,
    message: null,
};

const post = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value,
        }),
        [WRITE_SUCCESS]: (state, { payload: post }) => ({
            ...state,
            post,
        }),
        [WRITE_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError,
        }),
        [DELETE_SUCCESS]: (state, { payload: message }) => ({
            ...state,
            message,
        }),
        [DELETE_FAILURE]: (state, { payload: postError }) => ({
            ...state,
            postError
        }),
    },
    initialState,
);

export default post;