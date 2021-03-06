import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return [
        type, 
        SUCCESS, 
        FAILURE
    ];
};

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function* (action) {
        yield put(startLoading(type));

        console.log(action);
        try {
            const response = yield call(request, action.payload);

            console.log(response);
            yield put({
                type: SUCCESS,
                payload: response.data.payload
            });
        } catch(err) {
            yield put({
                type: FAILURE,
                payload: err,
                error: true,
            });
        }
    
        yield put(finishLoading(type));
    };
}