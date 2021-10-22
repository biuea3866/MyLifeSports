import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as postAPI from '../lib/api/post';
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = 'posts/INITIALIZE';

const [
    READ_POST,
    READ_POST_SUCCESS,
    READ_POST_FAILURE
] = createRequestActionTypes('posts/READ_POST');

const [
    LIST_ALL,
    LIST_ALL_SUCCESS,
    LIST_ALL_FAILURE
] = createRequestActionTypes('posts/LIST_ALL');

const [
    LIST_POSTS_TYPE,
    LIST_POSTS_TYPE_SUCCESS,
    LIST_POSTS_TYPE_FAILURE
] = createRequestActionTypes('posts/LIST_POST_TYPES')

const [
    LIST_POSTS_USERID,
    LIST_POSTS_USERID_SUCCESS,
    LIST_POSTS_USERID_FAILURE
] = createRequestActionTypes('posts/LIST_POSTS_USERID');

const [
    LIST_POSTS_KEYWORD,
    LIST_POSTS_KEYWORD_SUCCESS,
    LIST_POSTS_KEYWORD_FAILURE
] = createRequestActionTypes('posts/LIST_POSTS_KEYWORD');

export const readPost = createAction(READ_POST, _id => _id);

export const listAll = createAction(LIST_ALL);

export const listType = createAction(LIST_POSTS_TYPE, type => type);

export const listUserId = createAction(LIST_POSTS_USERID, userId => userId);

export const listKeyword = createAction(LIST_POSTS_KEYWORD, keyword => keyword);

const readPostSaga = createRequestSaga(READ_POST, postAPI.getOne);

const listAllSaga = createRequestSaga(LIST_ALL, postAPI.getAll);

const listTypeSaga = createRequestSaga(LIST_POSTS_TYPE, postAPI.getPostsByType);

const listUserIdSaga = createRequestSaga(LIST_POSTS_USERID, postAPI.getPostsByUserId);

const listKeywordSaga = createRequestSaga(LIST_POSTS_KEYWORD, postAPI.getPostsByKeyword);

export function* postsSaga() {
    yield takeLatest(READ_POST, readPostSaga);
    yield takeLatest(LIST_ALL, listAllSaga);
    yield takeLatest(LIST_POSTS_TYPE, listTypeSaga);
    yield takeLatest(LIST_POSTS_USERID, listUserIdSaga);
    yield takeLatest(LIST_POSTS_KEYWORD, listKeywordSaga);
};

const initialState = {
    post: null,
    posts: null,
    postsError: null,
};

const posts = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [READ_POST_SUCCESS]: (state, { payload: posts }) => ({
            ...state,
            posts,
        }),
        [READ_POST_FAILURE]: (state, { payload: postsError }) => ({
            ...state,
            postsError,
        }),
        [LIST_ALL_SUCCESS]: (state, { payload: posts }) => ({
            ...state,
            posts,
        }),
        [LIST_ALL_FAILURE]: (state, { payload: postsError }) => ({
            ...state,
            postsError,
        }),
        [LIST_POSTS_TYPE_SUCCESS]: (state, { payload: posts }) => ({
            ...state,
            posts,
        }),
        [LIST_POSTS_TYPE_FAILURE]: (state, { payload: postsError }) => ({
            ...state,
            postsError
        }),
        [LIST_POSTS_USERID_SUCCESS]: (state, { payload: posts }) => ({
            ...state,
            posts,
        }),
        [LIST_POSTS_USERID_FAILURE]: (state, { payload: postsError }) => ({
            ...state,
            postsError
        }),
        [LIST_POSTS_KEYWORD_SUCCESS]: (state, { payload: posts }) => ({
            ...state,
            posts,
        }),
        [LIST_POSTS_KEYWORD_FAILURE]: (state, { payload: postsError }) => ({
            ...state,
            postsError
        }),
    },
    initialState,
);

export default posts;