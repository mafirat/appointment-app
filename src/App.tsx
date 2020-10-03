import React from 'react';
import _ from "lodash";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AuthLayout, CommonLayout } from './layouts';
import { commonRoutes, authRoutes } from './routes/';
export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        {
          _.map(authRoutes, (route, key) => {
            return <Route exact={true} key={key}
              path={route.path} render={(routeProps) => <AuthLayout Component={route.Component} {...routeProps} />} />
          })
        }
        {
          _.map(commonRoutes, (route, key) => {
            return <Route exact={true} key={key}
              path={route.path} render={(routeProps) => <CommonLayout Component={route.Component} {...routeProps} />} />
          })
        }
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
export default App;