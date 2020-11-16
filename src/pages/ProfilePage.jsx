import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import "../styles/ProfilePage.css";
import {
  Image,
  Editable,
  EditablePreview,
  EditableInput,
  Button,
  ButtonGroup,
} from "@chakra-ui/core";

import { MdBuild } from "react-icons/md";
import userContext from "../services/userContext";

export default function ProfilePage(props) {
  const { userData } = useContext(userContext);

  return (
    <div className="ProfilePage">
      <div className="ProfileDiv">
        <div className="ProfilePictureDiv">
          <Image
            size="200px"
            src="https://www.xovi.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
            alt="Profile Picture"
          />
          <div className="InputFormProfile">
            <div className="UsernameProfile">
              <h2 style={{ marginTop: "5px" }}>Username:</h2>
            </div>
            <div className="UsernameValueProfile">
              <h2 style={{ color: "#ffa62b", marginTop: "5px" }}>
                {userData.user.username}
              </h2>
            </div>

            <div className="FirstNameProfile">
              <h2 style={{ marginTop: "5px" }}>First Name:</h2>
            </div>
            <div className="FirstNameValueProfile">
              <h2 style={{ color: "#ffa62b", marginTop: "5px" }}>
                {userData.user.firstName}
              </h2>
            </div>

            <div className="LastNameProfile">
              <h2 style={{ marginTop: "5px" }}>Last Name:</h2>
            </div>
            <div className="LastNameValueProfile">
              <h2 style={{ color: "#ffa62b", marginTop: "5px" }}>
                {userData.user.lastName}
              </h2>
            </div>

            <div className="EmailProfile">
              <h2 style={{ marginTop: "5px" }}>Email:</h2>
            </div>
            <div className="EmailValueProfile">
              <h2 style={{ color: "#ffa62b", marginTop: "5px" }}>
                {userData.user.email}
              </h2>
            </div>
          </div>
          <div className="ButtonsProfileDiv">
            <ButtonGroup spacing={8}>
              <Button
                leftIcon="email"
                color="black"
                backgroundColor="#82c0cc"
                variantColor="white"
                variant="solid">
                Change Email
              </Button>
              <Button
                leftIcon={MdBuild}
                color="black"
                backgroundColor="#82c0cc"
                variantColor="white"
                variant="solid">
                Change Password
              </Button>
              <Button
                leftIcon={MdBuild}
                color="black"
                backgroundColor="#82c0cc"
                variantColor="white"
                variant="solid">
                Change Names
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
