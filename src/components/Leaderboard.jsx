import React from "react";
import "../styles/Leaderboard.css";
import { FormControl, Input, Button } from "@chakra-ui/core";

const mockTeams = [
  {
    TeamName: "User 1",
    Points: 86,
    Position: 1,
  },
  {
    TeamName: "User 2",
    Points: 77,
    Position: 2,
  },
  {
    TeamName: "User 3",
    Points: 74,
    Position: 3,
  },
  {
    TeamName: "User 4",
    Points: 54,
    Position: 4,
  },
  {
    TeamName: "User 5",
    Points: 47,
    Position: 5,
  },
  {
    TeamName: "User 6",
    Points: 43,
    Position: 6,
  },
  {
    TeamName: "User 7",
    Points: 42,
    Position: 7,
  },
  {
    TeamName: "User 8",
    Points: 31,
    Position: 8,
  },
  {
    TeamName: "User 9",
    Points: 24,
    Position: 9,
  },
  {
    TeamName: "User 10",
    Points: 21,
    Position: 10,
  },
  {
    TeamName: "User 11",
    Points: 18,
    Position: 11,
  },
  {
    TeamName: "User 12",
    Points: 14,
    Position: 12,
  },
  {
    TeamName: "User 13",
    Points: 13,
    Position: 13,
  },
  {
    TeamName: "User 14",
    Points: 12,
    Position: 14,
  },
  {
    TeamName: "User 15",
    Points: 11,
    Position: 15,
  },
  {
    TeamName: "User 16",
    Points: 10,
    Position: 16,
  },
  {
    TeamName: "User 17",
    Points: 9,
    Position: 17,
  },
];

function generateLeaderboard() {
  let tableRows = [];
  tableRows.push(
    <tr className="LeaderboardRow">
      <th id="PositionTag" className="LeaderboardColumn">
        #
      </th>
      <th id="TeamNameTag" className="LeaderboardColumn">
        Team Name
      </th>
      <th id="PointsTag" className="LeaderboardColumn">
        Pts
      </th>
    </tr>
  );
  for (let i = 0; i < mockTeams.length; i++) {
    tableRows.push(
      <tr className="LeaderboardRow">
        <th className="LeaderboardColumn">{mockTeams[i].Position}</th>
        <th className="LeaderboardColumn">{mockTeams[i].TeamName}</th>
        <th className="LeaderboardColumn">{mockTeams[i].Points}</th>
      </tr>
    );
  }
  return tableRows;
}

export default function Leaderboard(props) {
  return (
    <div className="Leaderboard">
      <h1 style={{ margin: 0, padding: 0, color: "black" }}>Leaderboard</h1>
      <div className="innerLeaderboard">
        <table className="LeaderboardTable">{generateLeaderboard()}</table>
      </div>
    </div>
  );
}
