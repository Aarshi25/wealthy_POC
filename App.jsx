import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Navigator from './src/navigation';
import { stockReducer } from "./src/reducer";
import rootSaga from "./src/sagas";


// const reducers = combineReducers({
//   login: LoginReducer
// });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(stockReducer);

export default class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          <Navigator/>
        </Provider>
    );
  }
}
