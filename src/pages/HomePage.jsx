import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Homepage.css";
import LeagueNews from "../components/LeagueNews";
import Chat from "../components/Chat";
import Leaderboard from "../components/Leaderboard";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div id="home-components">
        <div className="home-element">
          <LeagueNews />
        </div>
        <div className="home-element" id="home-lb">
          <Leaderboard />
        </div>
        <div className="home-element" id="home-chat">
          <Chat chatType="Global Chat" />
        </div>
      </div>
    </div>
  );
}
