import PageBodyContainer from "./components/PageBodyContainer";

function accessIf({ getState }) {
  const state = getState();

  return state.auth.username ? true : false;
}

export const routes = [
  {
    path: "/",
    exact: true,
    component: PageBodyContainer
  }
];
