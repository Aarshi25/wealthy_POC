import { put, takeLatest, all } from 'redux-saga/effects';
import {DataService} from "./DataService";
import { actions } from "./actions";


function* getData () {
    const stocks = DataService.getData()
        .then((response) => {
            return response
        });
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

