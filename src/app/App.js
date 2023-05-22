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
import History from "./layouts/history";
import UserProfile from "./components/user/userProfile";
import NewOperation from "./components/common/newOperation";

function App() {
  return (
      <div>
          <AuthProvider>
              <NavBar />
              <Switch>
                  <Route path="/login/:type?" component={Login} />
                  <Route path="/logout" component={LogOut} />
                  <Route path="/history" component={History} />
                  <Route path="/operation" component={NewOperation} />
                  <Route path="/user/:edit?" component={UserProfile}/>
                  <Route path="/" exact component={Start} />
                  <Redirect to="/" />
              </Switch>
              <ToastContainer />
          </AuthProvider>
      </div>
  );
}

export default App;
