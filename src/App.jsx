import React from "react";
import "./styles/App.css";
import MyTeam from "./pages/MyTeam";
import HomePage from "./pages/HomePage";
import MyTournaments from "./pages/MyTournaments"
import {Switch, Route} from 'react-router-dom';
import Authentication from "./pages/Authentication"
import Profile from "./pages/Profile";

export default function App() {
  return <div className="App">
    <Switch>
      <Route path="/Home" component={HomePage} exact/>
      <Route path="/MyTeam" render={(props) => (
        <MyTeam {...props} name="Team1"/>
      )}
      />
      <Route path="/MyTournaments" component={MyTournaments}/>
      <Route path="/ContactUs" component={null}/>
      <Route path="/Profile" component={Profile}/>
      <Route path="/login" component={Authentication}/>
    </Switch>
  </div>;
}