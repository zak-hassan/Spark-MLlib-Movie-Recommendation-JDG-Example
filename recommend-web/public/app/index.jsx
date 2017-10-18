import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { VIEWS_CONFIG, NAVBAR_CONFIG } from "./configs.jsx";
import App from "./pf-lib/appContainer/App.jsx";
import store from "./store";

render (
  <Provider store={store}>
    <App viewsConfig={VIEWS_CONFIG.CONFIG} navbarConfig={NAVBAR_CONFIG}/>
  </Provider>, document.getElementById('root')
);
