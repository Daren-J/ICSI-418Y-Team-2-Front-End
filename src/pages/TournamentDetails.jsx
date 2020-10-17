import React from "react";
import NavBar from "../components/NavBar";
import "../styles/TournamentDetails.css";
import { Tab, TabList, TabPanels, Tabs, TabPanel } from "@chakra-ui/core";
import TournamentCard from "../components/TournamentCard";

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
                bg="rgb(58, 29, 153, 0.8)"
                style={{
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 0,
                  border: "1px solid white",
                }}
              >
                My Team
              </Tab>
              <Tab
                mt="-1px"
                bg="rgb(58, 29, 153, 0.8)"
                style={{
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 0,
                  border: "1px solid white",
                }}
              >
                Past and Upcoming Matches
              </Tab>
              <Tab
                mt="-1px"
                bg="rgb(58, 29, 153, 0.8)"
                style={{
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 0,
                  border: "1px solid white",
                }}
              >
                Chat and Leaderboard
              </Tab>
            </TabList>

            <TabPanels color="black">
              <TabPanel>
                <div id="TourDetailsPanel1">PANEL 1</div>
              </TabPanel>
              <TabPanel>
                <div id="TourDetailsPanel2">PANEL 2</div>
              </TabPanel>
              <TabPanel>
                <div id="TourDetailsPanel3">PANEL 3</div>
              </TabPanel>
              <TabPanel>
                <div id="TourDetailsPanel4">PANEL 4</div>
              </TabPanel>
              <TabPanel>
                <div id="TourDetailsPanel5">PANEL 5</div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
