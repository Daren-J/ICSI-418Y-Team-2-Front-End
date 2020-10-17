import React from "react";
import NavBar from "../components/NavBar";
import "../styles/TournamentDetails.css";
import { Tab, TabList, TabPanels, Tabs, TabPanel } from "@chakra-ui/core";
import TournamentCard from "../components/TournamentCard";
import Chat from "../components/Chat";
import Leaderboard from "../components/Leaderboard";

export default function TournamentDetails(props) {
  return (
    <div className="TournamentDetails">
      <NavBar />
      <div className="TourCardDetailsPageDiv">
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
          tourid="651456125"
          imgsrc="https://i.pinimg.com/originals/0d/62/c5/0d62c5a2849ad4e0722d01deba9e363a.jpg"
          tournamentDetail={true}
        />
      </div>

      <div className="innerTournamentDetails">
        <div className="NavBarTabsTournamentDetails">
          <Tabs isFitted variant="enclosed">
            <TabList h="70px">
              <Tab
                mt="-1px"
                bg="rgb(114, 15, 15, 0.671)"
                style={{
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 0,
                }}
              >
                My Team
              </Tab>
              <Tab
                mt="-1px"
                bg="rgba(34, 168, 168, 0.671)"
                style={{
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 0,
                }}
              >
                Past and Upcoming Matches
              </Tab>
              <Tab
                mt="-1px"
                bg="rgb(58, 29, 153, 0.671)"
                style={{
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 0,
                }}
              >
                Chat and Leaderboard
              </Tab>
            </TabList>

            <TabPanels color="black">
              <TabPanel>
                <div id="TourDetailsPanel1">
                  {/* Team Selection */}
                </div>
              </TabPanel>
              <TabPanel>
                <div id="TourDetailsPanel2">
                  {/* Match History Component, Upcoming Matches Component */}
                </div>
              </TabPanel>
              <TabPanel>
                <div id="TourDetailsPanel3">
                  <Chat />
                  <Leaderboard />
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
