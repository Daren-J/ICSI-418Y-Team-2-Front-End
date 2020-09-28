import React, { useState } from "react";
import "../styles/PlayerCard.css";
import ProgressBar from "./ProgressBar";
import { Checkbox } from "@chakra-ui/core";

export default function PlayerCard(props) {
  const [isChecked, setIsChecked] = useState(false);

  function changeCheckedState(value) {
    setIsChecked(!value);
  }

  return (
    <div className="PlayerCard">
      <img
        className="PlayerImage"
        src="https://www.pngitem.com/pimgs/m/508-5088889_work-in-progress-logo-png-transparent-png.png"
        alt="PlayerImage"
        width="200px"
        height="150px"
      />

      <div className="PlayerDescription">
        <h4 style={{ padding: 0, margin: 0 }}>{props.name}</h4>
        <ProgressBar
          statName="RP (Max 100)"
          backgroundColor="black"
          color="orange"
          maxValue={100}
          value={props.rankingPoints}
        />
      </div>
      <label>
        <Checkbox
          id={`player${props.id}`}
          size="lg"
          variantColor="red"
          defaultIsunChecked
          style={{ marginBottom: "4%" }}
          onChange={() => changeCheckedState(isChecked)}
        >
          Select Player
        </Checkbox>
      </label>
    </div>
  );
}
