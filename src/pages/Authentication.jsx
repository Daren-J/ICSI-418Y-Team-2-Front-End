import React from "react";
import LoginRegister from "../components/LoginRegister";
import "../styles/Authentication.css";

export default function Authentication(props) {
  return (
    <div className="Authentication">
      <LoginRegister handleLogout={props.handleLogout} />
    </div>
  );
}
