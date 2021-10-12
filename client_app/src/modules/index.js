import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from './auth';
import loading from "./loading";
import user, { userSaga } from "./user";
import marker from './marker';
import map from "./map";
import maps, { mapsSaga } from "./maps";

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    marker,
    map,
    maps
});

export function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        mapsSaga(),
    ]);
};

export default rootReducer;