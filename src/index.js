import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';

<<<<<<< HEAD
import reducer from "./state/reducers/index";

const store = createStore(reducer, applyMiddleware(thunk, logger)); 
const store = createStore(applyMiddleware(thunk, logger)); 
=======

import reducer from "./state/reducers/index";

const store = createStore(reducer, applyMiddleware(thunk, logger)); 
>>>>>>> e18496ce006a6a73986b3bc8cc45150e05c95ce2

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
