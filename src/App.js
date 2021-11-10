import React, { Fragment, Suspense, lazy, useEffect } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import ReactGa from 'react-ga';
import Helmet from "react-helmet";


const LoggedOutComponent = lazy(() => import("./loggedIn/components/Main"));

function App() {

  useEffect(() => {
  ReactGa.initialize("UA-211171356-1");

  ReactGa.pageview('/App');

}, [])

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route>
              <LoggedOutComponent />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default (App);
