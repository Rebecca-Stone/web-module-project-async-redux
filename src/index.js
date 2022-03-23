import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";

import { createStore, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import reducer from "./state/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
