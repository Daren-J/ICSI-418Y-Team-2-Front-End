import React from "react";
import "./styles/App.css";
import MyTeam from "./pages/MyTeam";
import HomePage from "./pages/HomePage";
import MyTournaments from "./pages/MyTournaments";
import { Switch, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/MyTeam" component={MyTeam} exact />
        <Route path="/MyTournaments" component={MyTournaments} exact />
        <Route path="/ContactUs" component={ContactUs} exact />
        <Route path="/Profile" component={Profile} exact />
        <Route path="/login" component={Authentication} exact />
      </Switch>
    </div>
  );
}
