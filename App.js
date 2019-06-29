import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Navigator from './src/navigation';


// const reducers = combineReducers({
//   login: LoginReducer
// });

const store = createStore();

export default class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          <Navigator/>
        </Provider>
    );
  }
}
