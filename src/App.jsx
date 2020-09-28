<<<<<<< HEAD
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
=======
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
>>>>>>> eaa47c7fb014c228141ea283b1a2446a9079864e
