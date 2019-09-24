import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

export function renderRoutes(routes, store) {

    return  routes.map((route, i) => {
        const { access, ...restProps } = route;
        if (access) {
          return (
            <ProtectedRoute
              key={i}
              store={store}
              access={access}
              {...restProps}
            />
          );
        }

        return (
          <Route
            key={i}
            {...restProps}
          />
        );
      })
    
}

export * from 'react-router-dom';