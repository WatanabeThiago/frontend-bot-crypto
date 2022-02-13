import React from "react";
import Login from "./public/Login/Login";
import Settings from "./private/Settings/Settings";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Login />
      </Route>

      <Route path="/settings">
        <Settings />
      </Route>
    </BrowserRouter>
  );
}

export default Routes;
