import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashboardPage from "../pages/dashboard-page ";
import Error404Page from "../pages/Error 404 page";
import RegisterPage from "../pages/register-page";
import LgPage from "../pages/login-page";
import { AuthProvider } from "../shared/auth/Auth-context";
import MainPage from "../pages/front_office/MainPage";
export default function RouterApp() {
  return (
    
    <Router>
<AuthProvider>
        <Switch>
        <Route exact path="/" component={DashboardPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/admin" component={LgPage}/>
            <Route path="/main" component={MainPage} />
            <Route path="*" component={Error404Page} />
        </Switch>
        </AuthProvider>
    </Router>
    
  );
}