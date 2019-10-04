import App from "./App";
import * as serviceWorker from "./serviceWorker";

import util from "./apiAction/axios/utility";
import { routes } from "./routes";

import mainReducer from "./apiAction/apiType/mainReducer/mainReducer";
import rootSaga from "./apiAction/apiType";

util.RenderApp(App, document.getElementById("root"), {
  redux: {
    middlewares: [],
    mainReducer,
    rootSaga
  },
  routes
});
serviceWorker.unregister();
