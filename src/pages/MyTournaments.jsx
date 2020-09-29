import React, { useState } from "react";
import TeamInformation from "../components/TeamInformation";
import TournamentChat from "../components/TournamentChat";
import MatchHistory from "../components/MatchHistory";
import NavBar from "../components/NavBar";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/core";
import "../styles/MyTournaments.css";

const playersAvailable = [
  { id: 1, name: "Daniel", rankingPoints: 100 },
  { id: 2, name: "Robin", rankingPoints: 70 },
  { id: 3, name: "Alex", rankingPoints: 68 },
  { id: 4, name: "Sajjad", rankingPoints: 61 },
  { id: 5, name: "Neethu", rankingPoints: 56 },
  { id: 6, name: "Daren", rankingPoints: 37 },
  { id: 7, name: "OneMorePlayer", rankingPoints: 75 },
  { id: 8, name: "AnotherPlayer", rankingPoints: 43 },
  { id: 9, name: "OneOtherPlayer", rankingPoints: 92 },
  { id: 10, name: "SomeoneExtra", rankingPoints: 100 },
];

export default function MyTournaments() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const team1Rank =
    playersAvailable[0].rankingPoints +
    playersAvailable[1].rankingPoints +
    playersAvailable[2].rankingPoints +
    playersAvailable[3].rankingPoints +
    playersAvailable[4].rankingPoints;
  const team2Rank =
    playersAvailable[5].rankingPoints +
    playersAvailable[6].rankingPoints +
    playersAvailable[7].rankingPoints +
    playersAvailable[8].rankingPoints +
    playersAvailable[9].rankingPoints;

  return (
    <div className="MyTournaments">
      <NavBar />
      <div className="MyTabsTournament">
        <Tabs isFitted variant="enclosed" size="lg">
          <TabList>
            <Tab
              _selected={{
                color: "white",
                bg: "rgb(10, 53, 66)",
                shadow: "none",
              }}
              _hover={{ color: "lightseagreen" }}
            >
              Match History
            </Tab>
            <Tab
              _selected={{
                color: "white",
                bg: "rgb(10, 53, 66)",
                shadow: "none",
              }}
              _hover={{ color: "lightseagreen" }}
            >
              Team Stats
            </Tab>
            <Tab
              _selected={{
                color: "white",
                bg: "rgb(10, 53, 66)",
                shadow: "none",
              }}
              _hover={{ color: "lightseagreen" }}
            >
              Tournament Chat
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel
              className="TabPanelsMyTournaments"
              eventKey="matchhistory"
              title="Match History"
            >
              <MatchHistory />
              <Button
                variantColor="red"
                style={{ float: "left", marginTop: "20%" }}
                onClick={onOpen}
              >
                Play Demo
              </Button>
              <Modal
                size="70%"
                preserveScrollBarGap
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay />
                <ModalContent border="2px solid white" borderRadius="15px" bg="rgb(10, 53, 66)">
                  <ModalHeader textAlign="center">Team 1 vs Team 2</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <div className="teamMatchModal">
                      <div className="team1Match">
                        <h1 style={{ color: "red" }}>Team 1</h1>
                        <h3>
                          {`${playersAvailable[0].name} (${playersAvailable[0].rankingPoints} RP)`}
                        </h3>
                        <h3>
                          {`${playersAvailable[1].name} (${playersAvailable[1].rankingPoints} RP)`}
                        </h3>
                        <h3>
                          {`${playersAvailable[2].name} (${playersAvailable[2].rankingPoints} RP)`}
                        </h3>
                        <h3>
                          {`${playersAvailable[3].name} (${playersAvailable[3].rankingPoints} RP)`}
                        </h3>
                        <h3>
                          {`${playersAvailable[4].name} (${playersAvailable[4].rankingPoints} RP)`}
                        </h3>

                        <h1 className="team1Tag">{`Team 1 Rank: ${team1Rank} Ranking Points`}</h1>
                      </div>
                      <div className="team2Match">
                        <h1 style={{ color: "violet" }}>Team 2</h1>
                        <h3>
                          {`(${playersAvailable[5].rankingPoints} RP) ${playersAvailable[5].name}`}
                        </h3>
                        <h3>
                          {`(${playersAvailable[6].rankingPoints} RP) ${playersAvailable[6].name}`}
                        </h3>
                        <h3>
                          {`(${playersAvailable[7].rankingPoints} RP) ${playersAvailable[7].name}`}
                        </h3>
                        <h3>
                          {`(${playersAvailable[8].rankingPoints} RP) ${playersAvailable[8].name}`}
                        </h3>
                        <h3>
                          {`(${playersAvailable[9].rankingPoints} RP) ${playersAvailable[9].name}`}
                        </h3>
                        <h1 className="team2Tag">{`Team 2 Rank: ${team2Rank} Ranking Points`}</h1>
                      </div>
                      <h2 style={{ color: "green" }}>
                        {team1Rank > team2Rank ? "Team 1" : "Team 2"} Wins!
                      </h2>
                    </div>
                  </ModalBody>
                  <ModalFooter justifyContent="Center">
                    <Button variantColor="blue" mr={3} onClick={onClose}>
                      Okay
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </TabPanel>
            <TabPanel
              className="TabPanelsMyTournaments"
              eventKey="TeamInformation"
              title="Team Information"
            >
              <TeamInformation />
            </TabPanel>
            <TabPanel
              className="TabPanelsMyTournaments"
              eventKey="tournamentchat"
              title="Tournament Chat"
            >
              <TournamentChat />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
