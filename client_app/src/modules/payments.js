import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import * as paymentAPI from '../lib/api/payment';
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = 'payment/INITIALIZE';

const [
    GET_PAYMENT,
    GET_PAYMENT_SUCCESS,
    GET_PAYMENT_FAILURE,
] = createRequestActionTypes('payment/GET_PAYMENT');

const [
    GET_PAYMENTS,
    GET_PAYMENTS_SUCCESS,
    GET_PAYMENTS_FAILURE
] = createRequestActionTypes('payment/GET_PAYMENTS');

export const initialize = createAction(INITIALIZE);

export const getPayment = createAction(GET_PAYMENT, paymentId => paymentId);

export const getPayments = createAction(GET_PAYMENTS, payer => payer);

const getPaymentSaga = createRequestSaga(GET_PAYMENT, paymentAPI.getPayment);

const getPaymentsSaga = createRequestSaga(GET_PAYMENTS, paymentAPI.getPayements);

export function* paymentsSaga() {
    yield takeLatest(GET_PAYMENT, getPaymentSaga);
    yield takeLatest(GET_PAYMENTS, getPaymentsSaga);
}

const initialState = {
    payment: null,
    payments: null,
    error: null,
};

const payments = handleActions(
    {
        [INITIALIZE]: (state => initialState),
        [GET_PAYMENT_SUCCESS]: (state, { payload: payment }) => ({
            ...state,
            payment
        }),
        [GET_PAYMENT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [GET_PAYMENTS_SUCCESS]: (state, { payload: payments }) => ({
            ...state,
            payments,
        }),
        [GET_PAYMENTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default payments;