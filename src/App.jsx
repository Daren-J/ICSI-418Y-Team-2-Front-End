import React, { useState } from "react";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route, useParams } from "react-router-dom";
import Authentication from "./pages/Authentication";
import MyTournaments from "./pages/MyTournaments";
import ProfilePage from "./pages/ProfilePage";
import TournamentDetails from "./pages/TournamentDetails";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          render={(props) => (
            <Authentication
              {...props}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
          )}
          exact
        />
        <Route
          path="/HomePage"
          render={(props) => (
            <HomePage
              {...props}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
          )}
          exact
        />
        <Route
          path="/MyTournaments"
          render={(props) => (
            <MyTournaments
              {...props}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
          )}
          exact
        />

        <Route
          path="/Profile"
          render={(props) => (
            <ProfilePage
              {...props}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
          )}
          exact
        />

        <Route
          path="/TournamentDetails/:tourid"
          render={(props) => (
            <TournamentDetails
              {...props}
              tourIdProp={props.match.params.tourid}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
            />
          )}
          exact
        />
      </Switch>
    </div>
  );
}
