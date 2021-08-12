import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import MyBets from "./pages/MyBets";
import NewBet from "./pages/NewBet";
import Register from "./pages/RegisterUser";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/forget">
          <ResetPassword />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/my-bets">
          <MyBets />
        </Route>
        <Route path="/new-bet">
          <NewBet/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
