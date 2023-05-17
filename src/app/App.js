import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./layouts/login";
// import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./hooks/useAuth";
import LogOut from "./layouts/logOut";
import Start from "./layouts/start";

function App() {
  return (
      <div>
          <AuthProvider>
              <NavBar />
              <Switch>
                  <Route path="/login/:type?" component={Login} />
                  <Route path="/logout" component={LogOut} />
                  <Route path="/" exact component={Start} />
                  <Redirect to="/" />
              </Switch>
              <ToastContainer />
          </AuthProvider>
      </div>
  );
}

export default App;
