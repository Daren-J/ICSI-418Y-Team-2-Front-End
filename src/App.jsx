import React from "react";
import "./styles/App.css";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Profile from "./pages/Profile";
import ContactUs from "./pages/ContactUs";
import NavBar from "./components/NavBar";
import Chat from "./components/Chat";
import MatchHistory from "./components/MatchHistory";
import LeagueNews from "./components/LeagueNews";
import Leaderboard from "./components/Leaderboard";
import LoginRegister from "./components/LoginRegister";
import TournamentCard from "./components/TournamentCard";
import MyTournaments from "./pages/MyTournaments";
import TournamentDetails from "./pages/TournamentDetails";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <div className="App">
      {/*
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/MyTeam" component={MyTeam} exact />
        <Route path="/MyTournaments" component={MyTournaments} exact />
        <Route path="/ContactUs" component={ContactUs} exact />
        <Route path="/Profile" component={Profile} exact />
        <Route path="/login" component={Authentication} exact />
      </Switch>
      */}
      <TournamentDetails />
    </div>
  );
}
