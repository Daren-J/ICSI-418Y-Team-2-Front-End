import React from "react";
import "../styles/MatchHistory.css";

const mockMatches = [
  {
    title: "Match 1",
    description: "Match 1 description in full details.",
  },
  {
    title: "Match 2",
    description: "Match 2 description in full details.",
  },
  {
    title: "Match 3",
    description: "Match 3 description in full details.",
  },
  {
    title: "Match 4",
    description: "Match 4 description in full details.",
  },
  {
    title: "Match 5",
    description: "Match 5 description in full details.",
  },
];

// Generates the table of all Matches
function generateTable() {
  let elements = []
  for (let i=0; i<mockMatches.length; i++) {
    elements.push(
      <div className='matchTab' key={i}>
        <h1>{mockMatches[i].title}</h1> 
        <h4>{mockMatches[i].description}</h4> 
      </div>
    )
  }
  if (elements.length === 0) {
    elements.push(
      <div id='emptyMatches'>
        <h1>No matches have been played yet -- check back later.</h1>
      </div>
    )
  }
  return <div className="matchTable">{elements}</div>
}


export default function MatchHistory() {
  return (
    <div className="matchHistory">
      <div id="matchHistoryTitle">
        <h1>Match History</h1>
      </div>
        {generateTable()}
    </div>
  );
}
