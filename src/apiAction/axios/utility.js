import networkMain from "./network";
import RenderApp from "./renderApp";
import storeConnect from "./storeConnect";
class Utility {
  constructor() {
    this.networkMain = networkMain;
    this.RenderApp = RenderApp;
    this.storeConnect = storeConnect;
  }
}

const utility = new Utility();
export default utility;
