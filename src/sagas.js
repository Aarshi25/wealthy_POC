import { put, takeLatest, all, call } from 'redux-saga/effects';
import {DataService} from "./DataService";
import { actions } from "./actions";


function* getData () {
    const stocks = yield call(DataService.getData());
    yield put({type: actions.SET_STOCKS, payload: stocks})
}

function* watchGetData () {
    yield  takeLatest(actions.GET_STOCKS,getData);
}

export default function* rootSaga() {
    yield all([
        watchGetData(),
    ]);
}

