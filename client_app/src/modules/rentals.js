import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as rentalAPI from '../lib/api/rental';
import { takeLatest } from "@redux-saga/core/effects";

const [
    GET_RENTAL,
    GET_RENTAL_SUCCESS,
    GET_RENTAL_FAILURE,
] = createRequestActionTypes('rental/GET_RENTAL');

const [
    GET_RENTALS,
    GET_RENTALS_SUCCESS,
    GET_RENTALS_FAILURE
] = createRequestActionTypes('rental/GET_RENTALS');

export const getRental = createAction(GET_RENTAL, rentalId => rentalId);

export const getRentals = createAction(GET_RENTALS, userId => userId);

const getRentalSaga = createRequestSaga(GET_RENTAL, rentalAPI.getRental);

const getRentalsSaga = createRequestSaga(GET_RENTALS, rentalAPI.getRentals);

export function* rentalsSaga() {
    yield takeLatest(GET_RENTAL, getRentalSaga);
    yield takeLatest(GET_RENTALS, getRentalsSaga);
}

const initialState = {
    rental: null,
    rentals: null,
    error: null,
};

const rentals = handleActions(
    {
        [GET_RENTAL_SUCCESS]: (state, { payload: rental }) => ({
            ...state,
            rental
        }),
        [GET_RENTAL_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [GET_RENTALS_SUCCESS]: (state, { payload: rentals }) => ({
            ...state,
            rentals,
        }),
        [GET_RENTALS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default rentals;