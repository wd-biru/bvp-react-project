import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { renderRoutes } from "./routing/index";
import store from "./store/store";

function RenderApp(RootComponent, documentObject, appConfig) {
  const { redux, routes } = appConfig;
  const { mainReducer, rootSaga } = redux || {};

  const storeMain = store.createStore(mainReducer, rootSaga);
  /**
   * Render application with root component
   */
  ReactDOM.render(
    <Provider store={storeMain}>
      <Router>
        <RootComponent>
          <Switch>{renderRoutes(routes, { getState: store.getState })}</Switch>
        </RootComponent>
      </Router>
    </Provider>,
    documentObject
  );
}

export default RenderApp;
