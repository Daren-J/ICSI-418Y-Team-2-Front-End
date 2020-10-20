import React, { useEffect, useState } from "react";
import "../styles/PlayerCard.css";
import { Checkbox, Progress, Image } from "@chakra-ui/core";

export default function PlayerCard({
  id,
  rankingPoints,
  name,
  pts2,
  pts3,
  asst,
  ft,
  b,
  rb,
  st,
  onChange,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [average2Pointers, setAverage2Pointers] = useState(0);
  const [average3Pointers, setAverage3Pointers] = useState(0);
  const [averageRebounds, setAverageRebounds] = useState(0);
  const [averageBlocks, setAverageBlocks] = useState(0);
  const [averageAssists, setAverageAssists] = useState(0);
  const [averageSteals, setAverageSteals] = useState(0);
  const [averageFreeThrows, setFreeThrows] = useState(0);

  useEffect(() => {
    setAverage2Pointers(pts2);
    setAverage3Pointers(pts3);
    setAverageAssists(asst);
    setFreeThrows(ft);
    setAverageBlocks(b);
    setAverageRebounds(rb);
    setAverageSteals(st);
  }, []);

  function changeCheckedState(value) {
    setIsChecked(!value);
  }

  return (
    <div className="PlayerCard">
      <div className="PlayerImage">
        <Image
          size="100%"
          objectFit="fill"
          src="https://i.pinimg.com/originals/0d/62/c5/0d62c5a2849ad4e0722d01deba9e363a.jpg"
          alt="Tournament Image"
        />
      </div>

      <div className="PlayerDescription">
        <div style={{ fontSize: "25px", marginBottom: "10px" }}>{name}</div>

        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          {average2Pointers} Two Pointers
        </div>
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          {average3Pointers} Three Pointers
        </div>
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          {averageAssists} Assists
        </div>
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          {averageFreeThrows} Free Throws
        </div>
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          {averageBlocks} Blocks
        </div>
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          {averageRebounds} Rebounds
        </div>
        <div style={{ fontSize: "20px", marginBottom: "5px" }}>
          {averageSteals} Steals
        </div>

        <div style={{ fontSize: "20px", marginBottom: "5px", color: "red" }}>
          {rankingPoints} Ranking Points
        </div>
        <Progress
          borderRadius="15px"
          hasStripe
          isAnimated
          color="orange"
          size="lg"
          m="auto"
          w="80%"
          value={rankingPoints}
        />
      </div>
      <div className="CheckboxDivPCard">
        <Checkbox
          id={`player${id}`}
          size="lg"
          variantColor="red"
          defaultIsunChecked
          onChange={(event) => {
            setIsChecked(!isChecked);
            const PlayerDataChecked = {
              id: id,
              name: name,
              rp: rankingPoints,
              count: 1,
            };

            const PlayerDataUnChecked = {
              id: id,
              name: name,
              rp: -rankingPoints,
              count: -1,
            };
            if (isChecked) {
              onChange(PlayerDataUnChecked);
            } else {
              onChange(PlayerDataChecked);
            }
          }}
        >
          Select Player
        </Checkbox>
      </div>
    </div>
  );
}
