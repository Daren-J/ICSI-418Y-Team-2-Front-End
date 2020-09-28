import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav className="NavBar-nav">
        <ul className="NavBar-ul">
          <li className="NavBar-li">
            <Link to={"/"} className="h2tagNav">
              NBA PENGUIN
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to={"/MyTeam"} className="h2tagNav">
              My Team
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to={"/MyTournaments"} className="h2tagNav">
              My Tournaments
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to={"/ContactUs"} className="h2tagNav">
              Contact Us
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to={"/Profile"} className="h2tagNav">
              Profile
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to={"/login"} className="h2tagNav">
              Login/Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
