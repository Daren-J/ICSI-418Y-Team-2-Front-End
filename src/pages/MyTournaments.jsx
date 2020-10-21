import React, { useState } from "react";
import "../styles/MyTournaments.css";
import TournamentCard from "../components/TournamentCard";
import NavBar from "../components/NavBar";

export default function MyTournaments(props) {
  // You would normally receive IDs from the Backend from the Database
  const [GlobalTournamentID, setGlobalTournamentID] = useState("651456125");
  const [FriendTournamentID, setFriendTournamentID] = useState("345234223");

  return (
    <div className="MyTournaments">
      <NavBar handleLogout={props.handleLogout} />
      <div className="innerMyTournaments">
        <div id="GlobalTour">
          <TournamentCard
            type="Global"
            available="Yes"
            locked="No"
            df="10"
            mf="15"
            yf="2020"
            dt="10"
            mt="15"
            yt="2020"
            tourid={GlobalTournamentID}
            imgsrc="https://i.pinimg.com/originals/0d/62/c5/0d62c5a2849ad4e0722d01deba9e363a.jpg"
            tournamentDetail={false}
          />
        </div>
        <div id="FriendsTour">
          <TournamentCard
            type="Friends"
            available="No"
            locked="Yes"
            df="10"
            mf="15"
            yf="2020"
            dt="20"
            mt="12"
            yt="2021"
            tourid={FriendTournamentID}
            imgsrc="https://s.yimg.com/uu/api/res/1.2/oFE6MENxI8o0BE6RYKL15Q--~B/aD0yNjEwO3c9MzQ4ODtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/b427d19dd6238628dc7fa8acc2c212d3"
            tournamentDetail={false}
          />
        </div>
      </div>
    </div>
  );
}
