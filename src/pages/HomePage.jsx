import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Homepage.css";
import LeagueNews from "../components/LeagueNews";
import Chat from "../components/Chat";
import Leaderboard from "../components/Leaderboard";

export default function Homepage() {
  return (
    <div className="Homepage">
      <NavBar />
      <LeagueNews />
      <Leaderboard />
      <Chat type="Global" />
    </div>
  );
}
