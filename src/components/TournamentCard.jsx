import React, { useEffect, useState } from "react";
import "../styles/TournamentCard.css";
import { Button, Image, Progress, Stack } from "@chakra-ui/core";
import { Link } from "react-router-dom";

export default function TournamentCard({
  type,
  available,
  locked,
  df,
  mf,
  yf,
  dt,
  mt,
  yt,
  tourid,
  imgsrc,
  tournamentDetail,
  myTeamRP,
}) {
  const [TourType, setTourType] = useState("");
  const [TourActive, setTourActive] = useState("");
  const [TourLocked, setTourLocked] = useState("");
  const [TourStartDate, setTourStartDate] = useState("");
  const [TourEndDate, setTourEndDate] = useState("");
  const [TourID, setTourID] = useState("");
  const [ImageSrc, setImageSrc] = useState("");
  const [TourDetail, setTourDetail] = useState(false);
  const [allTeamAverageRP, setAllTeamAverageRP] = useState();
  const [numberOfTeams, setNumberOfTeams] = useState();
  const [myTeamRPTourCard, setTeamRPTourCard] = useState();
  const [totalMatches, setTotalMatches] = useState();
  const [matchesPlayed, setMatchesPlayed] = useState();
  const [matchesRemaining, setMatchesRemaining] = useState();

  useEffect(() => {
    setTourType(`${type} Tournament`);
    setTourActive(`${available}`);
    setTourLocked(`${locked}`);
    setTourStartDate(`${df}/${mf}/${yf}`);
    setTourEndDate(`${dt}/${mt}/${yt}`);
    setTourID(`${tourid}`);
    setImageSrc(`${imgsrc}`);
    setTourDetail(tournamentDetail);
  }, []);

  return (
    <div className="TournamentCard">
      <div className="TournamentCardImage">
        <Image
          size="100%"
          objectFit="fill"
          src={ImageSrc}
          alt="Tournament Image"
        />
      </div>
      <div className="TournamentCardDetails">
        <div id="TournamentCardName">{TourType}</div>

        <div id="TournamentCardActive">Active:</div>
        <div id="TCardActiveValue">{TourActive}</div>
        <div id="TournamentCardLocked">Locked In:</div>
        <div id="TCardLockedValue">{TourLocked}</div>
        <div id="TournamentCardDates">Dates: </div>
        <div id="TCardDatesValue">
          {TourStartDate} - {TourEndDate}
        </div>
        <div id="TournamentCardID">Tournament ID:</div>
        <div id="TCardIDValue">#{TourID}</div>
      </div>
      {TourDetail == true ? (
        <div className="StatsTourCard">
          <div id="TourRegisteredTeams">Registered Teams: {16}</div>
          <div id="AverageRankingPoints">Average Team RP: {360}/400</div>
          <div id="TourTotalMatches">Total Matches: {16 * 2}</div>
          <div id="TourMatchesRemaining">
            Matches Remaining: {12}/{16 * 2}
          </div>
          <Progress
            borderRadius="15px"
            hasStripe
            isAnimated
            color="red"
            size="lg"
            value={(360 / 400) * 100}
          />

          <div id="TourMatchesPlayed">
            Matches Played: {16 * 2 - 12}/{16 * 2}
          </div>
          <Progress
            borderRadius="15px"
            hasStripe
            isAnimated
            color="yellow"
            size="lg"
            value={((16 * 2 - 12) / (16 * 2)) * 100}
          />

          <div id="TeamEarnedPoints">
            My Team's RP:{" "}
            {myTeamRP === null || myTeamRP === undefined ? 0 : myTeamRP}/400
          </div>
          <Progress
            borderRadius="15px"
            hasStripe
            isAnimated
            color="pink"
            size="lg"
            value={
              (myTeamRP === null || myTeamRP === undefined
                ? 0
                : myTeamRP) / 400 * 100
            }
          />
        </div>
      ) : (
        <div className="ViewTournamentButtonDiv">
          <Button
            _focus={{ outline: "none", border: "none" }}
            style={{ outline: "none", border: "none", cursor: "pointer" }}
            variantColor="blue"
            size="md"
            onClick={() => {}}
          >
            View Tournament
          </Button>
        </div>
      )}
    </div>
  );
}
