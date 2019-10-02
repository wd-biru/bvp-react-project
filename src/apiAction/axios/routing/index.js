import React from "react";
import { Route, Switch } from "react-router-dom";

export function renderRoutes(routes) {
  return routes.map((route, i) => {
    const { ...restProps } = route;

    return <Route key={i} {...restProps} />;
  });
}

export * from "react-router-dom";
