import DashboardContainer from "./components/DashboardContainer";
import ResetPassword from "./components/login/ResetPassword";

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
  }
];
