import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import scioApp from './reducer'
import './index.css';
import Home from './containers/Home'
import { initialiseSession } from './actions/SessionActions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  scioApp,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
)
store.dispatch(initialiseSession())

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
