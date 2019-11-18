import DashboardContainer from "./components/DashboardContainer";
import ResetPassword from "./components/login/ResetPassword";
import Studio from "./components/studio-me/Studio";
import PlayerSetting from './components/studio-me/playerSetting/PlayerSetting';

export const routes = [
  {
    path: "/",
    exact: true,
    component: DashboardContainer
  },
  {
    path: "/password",
    exact: true,
    component: ResetPassword
  },
  {
    path: "/studio",
    exact: true,
    component: Studio
  },
  {
    path: "/playerSetting",
    exact: true,
    component: PlayerSetting
  }
];
