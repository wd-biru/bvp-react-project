import NetworkManager from './network';
import RenderApp from './renderApp';
import connectToStore from './connect';
import '../core/network/interceptorConfig';
class coreUtility {
  constructor() {
    this.NetworkManager = NetworkManager;
    this.RenderApp= RenderApp;
    this.connectToStore= connectToStore;
  }
}

const coreUtil = new coreUtility();
export default coreUtil;
