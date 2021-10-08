import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from './auth';
import loading from "./loading";
import user, { userSaga } from "./user";
import marker from './marker';
import map, { mapSaga } from "./map";

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    marker,
    map,
});

export function* rootSaga() {
    yield all([
        authSaga(),
        userSaga(),
        mapSaga()
    ]);
};

export default rootReducer;