import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as paymentAPI from '../lib/api/payment';
import { takeLatest } from "@redux-saga/core/effects";

const CHANGE_FIELD = 'payment/CHANGE_FIELD';
const INITIAILIZE = 'payment/INITIALIZE';
const [
    REQUEST_PAYMENT,
    REQUEST_PAYMENT_SUCCESS,
    REQUEST_PAYMENT_FAILURE,
] = createRequestActionTypes('payment/REQUEST_PAYMENT');

export const changeField = createAction(CHANGE_FIELD, ({
    key,
    value
}) => ({
    key,
    value
}));

export const initialize = createAction(INITIAILIZE);

export const requestPayment = createAction(REQUEST_PAYMENT, ({
    paymentName,
    payer,
    rentalId,
    price
}) => ({
    paymentName,
    payer,
    rentalId,
    price
}));

const requestPaymentSaga = createRequestSaga(REQUEST_PAYMENT, paymentAPI.requestPayment);

export function* paymentSaga() {
    yield takeLatest(REQUEST_PAYMENT, requestPaymentSaga);
}

const intialState = {
    paymentName: null,
    payer: null,
    rentalId: null,
    price: null,
    payment: null,
    paymentError: null,
};

const payment = handleActions(
    {
        [INITIAILIZE]: state => intialState,
        [CHANGE_FIELD]: (state, { payload: { key, value }}) => ({
            ...state,
            [key]: value
        }),
        [REQUEST_PAYMENT_SUCCESS]: (state, { payload: payment }) => ({
            ...state,
            payment
        }),
        [REQUEST_PAYMENT_FAILURE]: (state, { payload: paymentError }) => ({
            ...state,
            paymentError
        }),
    },
    intialState,
);

export default payment;