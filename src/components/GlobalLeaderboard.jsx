import React from "react";
import "../styles/GlobalLeaderboard.css";

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
];

function mockLeaderboardDivs() {
  let teams = [];

  for (let i = 0; i < 12; i++) {
    teams.push(
      <div className="LeaderboardSlot">
        <div className="LeaderboardPosition">
          <h3 className="h3TagLeaderboard">{mockTeams[i].Position}</h3>
        </div>
        <div className="LeaderboardTeamName">
          <h3 className="h3TagLeaderboard">{mockTeams[i].TeamName}</h3>
        </div>
        <div className="LeaderboardPoints">
          <h3 className="h3TagLeaderboard">{mockTeams[i].Points}</h3>
        </div>
        {i !== 11 ? (
          <hr
            style={{
              border: "2px solid rgb(53, 83, 83)",
              margin: 0,
              padding: 0,
            }}
          />
        ) : null}
      </div>
    );
  }
  return teams;
}

export default function GlobalLeaderboard() {
  return (
    <div className="GlobalLeaderboard">
      <h3 className="GPLTitle">Global Point Leaderboard</h3>
      <hr
        style={{ border: "2px solid rgb(53, 83, 83)", margin: 0, padding: 0 }}
      />
      <div className="LeaderboardPosition">
        <h3 className="h3TagLeaderboard">#</h3>
      </div>
      <div className="LeaderboardTeamName">
        <h3 className="h3TagLeaderboard">User</h3>
      </div>
      <div className="LeaderboardPoints">
        <h3 className="h3TagLeaderboard">Points</h3>
      </div>
      <hr
        style={{ border: "2px solid rgb(53, 83, 83)", margin: 0, padding: 0 }}
      />
      <div>{mockLeaderboardDivs()}</div>
    </div>
  );
}
