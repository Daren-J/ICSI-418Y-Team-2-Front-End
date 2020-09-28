<<<<<<< HEAD
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
            <Link to="/MyTournaments" class="h2tagNav">
              My Tournaments
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to="/ContactUs" className="h2tagNav">
              Contact Us
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to="/Profile" className="h2tagNav">
              Profile
            </Link>
          </li>
          <li className="NavBar-li">
            <Link to="/login" className="h2tagNav">
              Login/Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
=======
import React from "react";
import "../styles/NavBar.css";
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li><Link to="/Home" class='h2tagNav'>NBA PENGUIN</Link></li>
          <li><Link to="/MyTeam" class='h2tagNav'>My Team</Link></li>
          <li><Link to="/MyTournaments" class='h2tagNav'>My Tournaments</Link></li>
          <li><Link to="/" class='h2tagNav'>Contact Us</Link></li>
          <li><Link to="/Profile" class='h2tagNav'>Profile</Link></li>
          <li><Link to="/login" class='h2tagNav'>Login/Register</Link></li>
        </ul>
      </nav>
    </div>
  );
}
>>>>>>> eaa47c7fb014c228141ea283b1a2446a9079864e
