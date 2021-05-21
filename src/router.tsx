import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/form";
import Home from "./pages/home";
const Router: React.SFC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />

      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
};

export default Router;
