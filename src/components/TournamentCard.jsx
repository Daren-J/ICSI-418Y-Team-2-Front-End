import React, { useEffect, useState } from "react";
import "../styles/TournamentCard.css";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Button,
  Image,
  Progress,
  Stack,
  Box,
} from "@chakra-ui/core";
import { Link, Route } from "react-router-dom";

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
          <div className="more-info">
            <Accordion
              allowToggle
              allowMultiple
              marginTop="5px"
              marginBottom="5px">
              <AccordionItem defaultIsOpen="false">
                {({ isExpanded }) => (
                  <>
                    <AccordionHeader
                      border="none"
                      borderRadius="10px"
                      color="#ede7e3"
                      bg="#16697a"
                      _hover="bg: #ffa62b">
                      <Box flex="1" textAlign="center">
                        {isExpanded ? "Show Less" : "Show More"}
                      </Box>
                    </AccordionHeader>
                    <AccordionPanel>
                      <div className="acc-element" id="TourRegisteredTeams">
                        Registered Teams: {16}
                      </div>
                      <div className="acc-element" id="AverageRankingPoints">
                        Average Team RP: {360}/400
                      </div>
                      <div className="acc-element" id="TourTotalMatches">
                        Total Matches: {16 * 2}
                      </div>
                      <div className="acc-element" id="TourMatchesRemaining">
                        Matches Remaining: {12}/{16 * 2}
                      </div>
                      <Progress
                        borderRadius="15px"
                        hasStripe
                        isAnimated
                        color="red"
                        size="lg"
                        value={(360 / 400) * 100}
                        marginTop="5px"
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
                        marginTop="5px"
                      />

                      <div id="TeamEarnedPoints">
                        My Team's RP:{" "}
                        {myTeamRP === null || myTeamRP === undefined
                          ? 0
                          : myTeamRP}
                        /400
                      </div>
                      <Progress
                        borderRadius="15px"
                        hasStripe
                        isAnimated
                        color="pink"
                        size="lg"
                        value={
                          ((myTeamRP === null || myTeamRP === undefined
                            ? 0
                            : myTeamRP) /
                            400) *
                          100
                        }
                        marginTop="5px"
                      />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ) : (
        <div className="ViewTournamentButtonDiv">
          <Link
            to={{
              pathname: `/TournamentDetails/${tourid}`,
            }}>
            <Button
              _focus={{ outline: "none", border: "none" }}
              style={{ outline: "none", border: "none", cursor: "pointer" }}
              bg="#ffa62b"
              color="black"
              size="md">
              View Tournament
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
