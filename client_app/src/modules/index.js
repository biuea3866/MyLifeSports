import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from './auth';
import loading from "./loading";
import user, { userSaga } from "./user";
import marker from './marker';
import map from "./map";
import maps, { mapsSaga } from "./maps";
import rental, { rentalSaga } from './rental';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    marker,
    map,
    maps,
    rental
});

export function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        mapsSaga(),
        rentalSaga(),
    ]);
};

export default rootReducer;