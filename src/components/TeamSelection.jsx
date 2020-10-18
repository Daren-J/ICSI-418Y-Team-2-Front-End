import React, { useEffect, useState } from "react";
import "../styles/TeamSelection.css";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/core";
import PlayerCard from "./PlayerCard";
import { playersAvailable } from "../services/playersAvailable";

export default function TeamSelection() {
  const [playersSelectedCount, setPlayersSelectedCount] = useState();
  const [playerRankingPoints, setPlayerRankingPoints] = useState(0);
  const [rosterPlayersCount, setRosterPlayersCount] = useState();
  const [rosterPlayers, setRosterPlayers] = useState([]);
  const [activePlayers, setActivePlayers] = useState([]);
  const [locked, setLocked] = useState(true);

  const toast = useToast();

  function getPlayerDataById(val) {
    const result = playersAvailable.find((obj) => {
      return obj.id === val;
    });
    return result;
  }

  function generatePlayerDivs(data) {
    let players = [];
    if (data === undefined || data === null) {
      for (let i = 0; i < playersAvailable.length; i++) {
        players.push(
          <PlayerCard
            onChange={(value) => {
              if (value.count > 0) {
                rosterPlayers.push(value.id);
              } else {
                const index = rosterPlayers.indexOf(value.id);
                console.log(index);
                rosterPlayers.splice(index, 1);
              }
              setPlayersSelectedCount(playersSelectedCount + value.count);
              if (rosterPlayers.length === 10) {
                setLocked(false);
              } else {
                setLocked(true);
              }
            }}
            name={playersAvailable[i].name}
            rankingPoints={playersAvailable[i].rankingPoints}
            id={playersAvailable[i].id}
            pts2={playersAvailable[i].pts2}
            pts3={playersAvailable[i].pts3}
            asst={playersAvailable[i].asst}
            ft={playersAvailable[i].ft}
            b={playersAvailable[i].b}
            rb={playersAvailable[i].rb}
            st={playersAvailable[i].st}
          />
        );
      }
    } else {
      let rosterData = [];
      for (let i = 0; i < 10; i++) {
        rosterData.push(getPlayerDataById(data[i]));
        players.push(
          <PlayerCard
            onChange={(value) => {
              activePlayers.push(value.id);
              setRosterPlayersCount(playersSelectedCount + 1);
              setPlayerRankingPoints(playerRankingPoints + value.rp);
            }}
            name={rosterData[i].name}
            rankingPoints={rosterData[i].rankingPoints}
            id={rosterData[i].id}
            pts2={rosterData[i].pts2}
            pts3={rosterData[i].pts3}
            asst={rosterData[i].asst}
            ft={rosterData[i].ft}
            b={rosterData[i].b}
            rb={rosterData[i].rb}
            st={rosterData[i].st}
          />
        );
      }
    }
    return players;
  }

  return (
    <div className="TeamSelection">
      <div className="NavTeamSelection">
        <div className="TabsTeamSelection">
          <Tabs isFitted variant="enclosed">
            <TabList borderTop="1px solid white;" h="50px">
              <Tab
                mb="0"
                bg="rgb(114, 30, 0)"
                style={{
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 0,
                  borderLeft: "1px solid white",
                  borderRight: "1px solid white",
                }}
              >
                Team Stats
              </Tab>
              <Tab
                mb="0"
                bg="rgb(34, 168, 168)"
                style={{
                  color: "white",
                  border: "none",
                  boxShadow: "none",
                  outline: "none",
                  borderRadius: 0,
                }}
              >
                Roster Selection
              </Tab>
              {locked ? null : (
                <Tab
                  mb="0"
                  bg="rgb(58, 29, 153)"
                  style={{
                    color: "white",
                    border: "none",
                    boxShadow: "none",
                    outline: "none",
                    borderRadius: 0,
                    borderLeft: "1px solid white",
                    borderRight: "1px solid white",
                  }}
                >
                  Active Players
                </Tab>
              )}
            </TabList>

            <TabPanels borderTop="1px solid white;" color="white">
              <TabPanel>
                <div className="SecondaryTabsTeamStats"></div>
              </TabPanel>
              <TabPanel>
                <div className="SecondaryTabsRosterSelection">
                  {generatePlayerDivs()}
                </div>
              </TabPanel>
              {locked ? null : (
                <TabPanel>
                  <div className="SecondaryTabsActivePlayers">
                    {generatePlayerDivs(rosterPlayers)}
                  </div>
                </TabPanel>
              )}
            </TabPanels>
          </Tabs>
        </div>
        <div className="ActionsTeamSelection"></div>
      </div>
    </div>
  );
}
