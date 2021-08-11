import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";

function App() {
  return (
    <div >
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
