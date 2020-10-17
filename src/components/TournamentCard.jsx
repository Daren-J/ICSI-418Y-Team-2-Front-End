import React, { useEffect, useState } from "react";
import "../styles/TournamentCard.css";
import { Button, Image, Progress, Stack } from "@chakra-ui/core";

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
}) {
  const [TourType, setTourType] = useState("");
  const [TourActive, setTourActive] = useState("");
  const [TourLocked, setTourLocked] = useState("");
  const [TourStartDate, setTourStartDate] = useState("");
  const [TourEndDate, setTourEndDate] = useState("");
  const [TourID, setTourID] = useState("");
  const [ImageSrc, setImageSrc] = useState("");
  const [TourDetail, setTourDetail] = useState(false);
  const [myTeamRankingPoints, setMyTeamRankingPoints] = useState();

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
          <div id="TourRegisteredTeams">Registered Teams: {`16`}</div>
          <div id="AverageRankingPoints">Average Team RP: {`360/400`}</div>
          <Progress
            hasStripe
            isAnimated
            color="red"
            size="lg"
            value={(360 / 400) * 100}
          />
          <div id="TeamEarnedPoints">Team Ranking Points: {`400/400`}</div>
          <Progress hasStripe isAnimated color="pink" size="lg" value={10} />
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
