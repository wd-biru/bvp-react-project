import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from './routing/index';
// import { asyncActions } from './redux-middlewares/async-actions';
import store from './store/store';




function RenderApp(RootComponent, documentObject, appConfig) {
  if (!documentObject) {
    throw new Error('Document Object not found !!!');
  }

  // const baseMiddlewares = [asyncActions];
  const { redux, routes } = appConfig;
  const { rootReducer, middlewares, rootSaga } = redux || {};

  if (typeof rootReducer !== 'function') {
    throw new Error('Root reducer is expected to be a function !!!');
  }

  /**
   * Use appCofig to initialize app level settings
   */
  // http.init(httpConfig);

  // const finalMiddlewares = baseMiddlewares.concat(middlewares || []);

  /**
   * Create store with middlewares and devtools extension
   */
  // const createStoreWithMiddleware = applyMiddleware.apply(undefined, finalMiddlewares)(createStore);
  const storeMain = store.createStore(rootReducer, rootSaga); // createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  /**
   * Render application with root component
   */
  ReactDOM.render(
    <Provider store={storeMain}>
      <Router>
        <RootComponent>
          <Switch>
          {
            renderRoutes(routes, { getState: store.getState })
          }
          </Switch>
        </RootComponent>
      </Router>
    </Provider>,
    documentObject
  );
}

export default RenderApp;