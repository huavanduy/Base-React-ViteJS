import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import configureStore from "./store";

const history = createBrowserHistory();
const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

