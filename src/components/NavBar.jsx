import React, { useContext } from "react";
import "../styles/NavBar.css";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Avatar, Image, Button } from "@chakra-ui/core";
import userContext from "../services/userContext";

export default function NavBar() {
  const { userData, setUserData } = useContext(userContext);
  const history = useHistory();

  const profile = () => {
    history.push("/Profile");
  };

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return userData.user ? (
    <div className="NavBar">
      <nav className="NavBar-nav">
        <ul className="NavBar-ul">
          <li className="NavBar-li">
            <Link to={"/Home"}>
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
                border="1px solid #489fb5"
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
            <Link eventKey={2} onClick={logout} className="h2tagNav">
              Log Out
            </Link>
          </li>
          <li className="NavBar-li">
            <Link className="h2tagNav" eventKey={2} onClick={profile}>
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
