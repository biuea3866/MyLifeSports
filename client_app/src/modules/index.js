import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from './auth';
import loading from "./loading";
import user, { userSaga } from "./user";
import marker from './marker';
import map from "./map";
import maps, { mapsSaga } from "./maps";
import rental, { rentalSaga } from './rental';
import payment, { paymentSaga } from './payment';
import payments, { paymentsSaga } from "./payments";
import rentals, { rentalsSaga } from "./rentals";

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    marker,
    map,
    maps,
    rental,
    rentals,
    payment,
    payments,
});

export function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        mapsSaga(),
        rentalSaga(),
        rentalsSaga(),
        paymentSaga(),
        paymentsSaga()
    ]);
};

export default rootReducer;