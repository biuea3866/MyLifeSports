import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as postAPI from '../lib/api/post';
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = 'comment/INITIALIZE';

const CHANGE_FIELD = 'comment/CHANGE_FIELD';

const [
    COMMENT_REGISTER,
    COMMENT_REGISTER_SUCCESS,
    COMMENT_REGISTER_FAILURE
] = createRequestActionTypes('comment/COMMENT_REGISTER');

const [
    COMMENT_DELETE,
    COMMENT_DELETE_SUCCESS,
    COMMENT_DELETE_FAILURE
] = createRequestActionTypes('comment/COMMENT_DELETE');

export const initialize = createAction(INITIALIZE);

export const changeField = createAction(CHANGE_FIELD, ({
    key,
    value
}) => ({
    key,
    value
}));

export const commentRegister = createAction(COMMENT_REGISTER, ({
    postId,
    userId,
    writer,
    content
}) => ({
    postId,
    userId,
    writer,
    content
}));

export const deleteComment = createAction(COMMENT_DELETE, _id => _id);

const commentRegisterSaga = createRequestSaga(COMMENT_REGISTER, postAPI.comment);

const deleteCommentSaga = createRequestSaga(COMMENT_DELETE, postAPI.deleteComment);

export function* commentSaga() {
    yield takeLatest(COMMENT_REGISTER, commentRegisterSaga);
    yield takeLatest(COMMENT_DELETE, deleteCommentSaga);
}

const initialState = {
    postId: null,
    userId: null,
    writer: null,
    content: null,
    message: null,
    error: null,
};

const comment = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value
        }),
        [COMMENT_REGISTER_SUCCESS]: (state, { payload: message }) => ({
            ...state,
            message,
        }),
        [COMMENT_REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [COMMENT_DELETE_SUCCESS]: (state, { payload: message }) => ({
            ...state,
            message,
        }),
        [COMMENT_DELETE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
    },
    initialState,
);

export default comment;