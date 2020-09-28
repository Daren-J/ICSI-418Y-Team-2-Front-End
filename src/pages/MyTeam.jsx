import React from "react";
import NavBar from "../components/NavBar";
import "../styles/MyTeam.css";
import ProgressBar from "../components/ProgressBar";
import PlayerCard from "../components/PlayerCard";
import {
  Editable,
  EditablePreview,
  EditableInput,
  Icon,
  Button,
  Tooltip,
} from "@chakra-ui/core";

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

function generatePlayerDivs() {
  let players = [];

  for (let i = 0; i < playersAvailable.length; i++) {
    players.push(
      <div id={playersAvailable[i].id} className="playerCardDiv">
        <PlayerCard
          name={playersAvailable[i].name}
          rankingPoints={playersAvailable[i].rankingPoints}
          id={playersAvailable[i].id}
        />
      </div>
    );
  }
  return players;
}

export default function MyTeam() {
  /*
  const [playersSelectedCount, setPlayersSelectedCount] = useState(0);
  const [playerIDs, setPlayerIDs] = useState([]);
  const [playerRankingPoints, setPlayerRankingPoints] = useState(0);
  const [canSavePlayers, setCanSavePlayers] = useState(true);
*/

  return (
    <div className="MyTeam">
      <NavBar />
      <div className="MainDivMyTeam">
        <div className="teamImageCardContainer">
          <img
            className="TeamImage"
            src="https://www.pngitem.com/pimgs/m/508-5088889_work-in-progress-logo-png-transparent-png.png"
            alt="TeamImage"
            width="100%"
          />
          <div className="TeamDescription">
            <h2>
              <Editable
                style={{ marginLeft: "5%", marginRight: "5%" }}
                w="90%"
                defaultValue="Team Name"
              >
                <EditablePreview style={{ color: "white" }} />
                <EditableInput style={{ color: "white" }} />
              </Editable>
            </h2>
            <hr style={{ border: "1px solid white" }} />
            <h2 style={{ margin: 0, padding: 0 }}>Team Status</h2>
            <ProgressBar
              statName="Combined Player RP (MAX: 400)"
              color="red"
              maxValue={400}
              value={200}
            />
          </div>
        </div>
        <div className="TeamPlayerSelection">
          <div className="playerSelectionNav">
            <Tooltip label="Save Changes" placement="bottom" bg="blue.500">
              <Button className="SaveButton" variantColor="blue">
                Save{" "}
                <Icon
                  marginLeft="0px"
                  style={{ float: "left", marginLeft: "10px" }}
                  name="check"
                  size="28px"
                  color="green.300"
                />
              </Button>
            </Tooltip>
            <Tooltip label="Cancel Changes" placement="bottom" bg="red.600">
              <Button className="SaveButton" variantColor="red">
                Cancel{" "}
                <Icon
                  marginLeft="0px"
                  style={{ float: "left", marginLeft: "10px" }}
                  name="not-allowed"
                  size="28px"
                  color="white"
                />
              </Button>
            </Tooltip>
          </div>
          <div className="playerDivs">{generatePlayerDivs()}</div>
        </div>
      </div>
    </div>
  );
}
