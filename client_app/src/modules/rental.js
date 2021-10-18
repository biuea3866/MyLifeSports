import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as rentalAPI from '../lib/api/rental';
import { takeLatest } from "@redux-saga/core/effects";

const CHANGE_FIELD = 'rental/CHANGE_FIELD';
const INITIALIZE = 'rental/INITIALIZE';
const [
    MAKE_RENTAL,
    MAKE_RENTAL_SUCCESS,
    MAKE_RENTAL_FAILURE,
] = createRequestActionTypes('rental/MAKE_RENTAL');

export const changeField = createAction(CHANGE_FIELD, ({
    key,
    value
}) => ({
    key,
    value
}));

export const initialize = createAction(INITIALIZE);

export const makeRental = createAction(MAKE_RENTAL, ({
    price,
    borrower,
    tel,
    userId,
    date,
    time,
    mapId,
    mapName
}) => ({
    price,
    borrower,
    tel,
    userId,
    date,
    time,
    mapId,
    mapName
}));

const makeRentalSaga = createRequestSaga(MAKE_RENTAL, rentalAPI.rental);

export function* rentalSaga() {
    yield takeLatest(MAKE_RENTAL, makeRentalSaga);
}

const initialState = {
    price: null,
    borrower: '',
    tel: '',
    userId: '',
    date: null,
    time: null,
    mapId: '',
    mapName: '',
    rental: null,
    rentalError: null
};

const rental = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value
        }),
        [MAKE_RENTAL_SUCCESS]: (state, { payload: rental }) => ({
            ...state,
            rental,
        }),
        [MAKE_RENTAL_FAILURE]: (state, { payload: rentalError }) => ({
            ...state,
            rentalError
        })
    },
    initialState,
);

export default rental;