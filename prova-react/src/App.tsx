import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Footer from "./components/Footer";
import GlobalStyle from "./GlobalStyle";
import Account from "./pages/Account";
import Home from "./pages/Home";
import MyBets from "./pages/MyBets";
import NewBet from "./pages/NewBet";
import Register from "./pages/RegisterUser";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import UpdatePassword from "./pages/UpdatePassword";
import UpdateUser from "./pages/UpdateUser";
import { CookiesProvider } from "react-cookie";
import { useAppSelector } from "./store/store-hooks";
import CreateGame from "./pages/CreateGame";

function App() {
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);

  return (
    <div>
      <CookiesProvider>
        <GlobalStyle />
        <ToastContainer style={{ fontSize: "14px" }} />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/forget" exact>
            <ResetPassword />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/reset" exact>
            <UpdatePassword />
          </Route>
          <Route path="/update" exact>
          {isLoggedIn && <UpdateUser />}
            {!isLoggedIn && <Redirect to= '/' />}
            
          </Route>
          <Route path="/game" exact>
          {isLoggedIn && <CreateGame />}
            {!isLoggedIn && <Redirect to= '/' />}
            
          </Route>
          <Route path="/my-bets">
            {isLoggedIn && <MyBets />}
            {!isLoggedIn && <Redirect to= '/' />}
            
          </Route>
          <Route path="/new-bet">
            <NewBet />
          </Route>
          <Route path="/account">
          {isLoggedIn && <Account />}
            {!isLoggedIn && <Redirect to= '/' />}
            
            
          </Route>
          <Route path="*">{<Redirect to="/" />}</Route>
        </Switch>

        <Footer />
      </CookiesProvider>
    </div>
  );
}

export default App;
