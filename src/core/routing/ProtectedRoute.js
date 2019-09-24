import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function isAccessAllowed(hasAccess, store) {
  if (typeof hasAccess !== 'function') {
    return hasAccess;
  }
  return hasAccess(store);
}

function ProtectedRoute(props) {
  const { store, access, component: Component, render, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={props =>
        isAccessAllowed(access.if, store) ? (
          Component ? <Component {...props} /> : render()
        ) : (
            <Redirect
              to={{
                pathname: access.redirectTo,
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

export default ProtectedRoute;