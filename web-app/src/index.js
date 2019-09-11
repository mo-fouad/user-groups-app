import React from "react";
import { render } from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

import "./scss/app.scss";

render(
   <Provider store={store}>
      <Router>
         <App />
      </Router>
   </Provider>,
   document.getElementById("app")
);
