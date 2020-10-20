import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { Avatar, Image } from "@chakra-ui/core";

export default function NavBar({ handleLogout }) {
  return (
    <div className="NavBar">
      <nav className="NavBar-nav">
        <ul className="NavBar-ul">
          <li className="NavBar-li">
            <Link to={"/HomePage"}>
              <Image
                backgroundColor="white"
                float="left"
                mt="5px"
                mb="5px"
                mr="10px"
                rounded="full"
                size="55px"
                src="https://media.discordapp.net/attachments/747875449937461333/752598704988487696/penguin_gang_logo.png"
                alt="NBA PENGUIN"
                border="1px solid red"
              />
              <p className="h2tagNavLogo">NBA Penguin</p>
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to={"/MyTournaments"} className="h2tagNav">
              My Tournaments
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to={"/"} className="h2tagNav" onClick={handleLogout}>
              Log out
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to={"/Profile"} className="h2tagNav">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
