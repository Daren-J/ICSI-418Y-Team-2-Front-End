import React, { useEffect, useState } from "react";
import "../styles/LoginRegister.css";
import {
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  FormControl,
  FormLabel,
  Input,
  Button,
  Tooltip,
  useToast,
} from "@chakra-ui/core";
import { Link } from "react-router-dom";
const axios = require("axios").default;

export default function LoginRegister(props) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");

  function loginAuthAttempt() {
    axios
      .post("/login/signin", null, {
        params: {
          email: loginEmail,
          password: loginPassword,
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          props.handleLogout(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }

  function registerAuthAttempt() {
    axios
      .post("/login/signup", {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
        firstName: registerFirstName,
        lastName: registerLastName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }
  const toast = useToast();
  return (
    <div className="LoginRegister">
      <h2 style={{ margin: 0, paddingBottom: "10px", fontSize: "30px" }}>
        NBA Penguin
      </h2>
      <div>
        <Tabs isFitted variant="enclosed">
          <TabList height="50px">
            <Tab
              mt="-1px"
              bg="rgb(58, 29, 153, 0.8)"
              style={{
                color: "white",
                border: "none",
                boxShadow: "none",
                outline: "none",
                borderRadius: "20px 20px 0 0",
              }}
            >
              Login
            </Tab>
            <Tab
              mt="-1px"
              bg="rgb(60, 96, 214, 0.8)"
              style={{
                color: "white",
                border: "none",
                boxShadow: "none",
                outline: "none",
                borderRadius: "20px 20px 0 0",
              }}
            >
              Register
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel
              height="450px"
              bg="rgb(58, 29, 153, 0.8)"
              style={{
                color: "white",
                border: "none",
                boxShadow: "none",
                outline: "none",
                borderRadius: "0 0 25px 25px",
                borderTop: "2px solid white",
              }}
            >
              <div className="loginTab">
                <FormControl>
                  <div>
                    <FormLabel
                      isRequired
                      mt="70px"
                      pl="0"
                      pr="0"
                      textAlign="center"
                      htmlFor="loginUserEmail"
                    >
                      Email Address:
                    </FormLabel>
                    <Input
                      m="auto"
                      width="430px"
                      id="loginUserEmail"
                      placeholder="Email Address"
                      onChange={(e) => setLoginEmail(e.target.value)}
                    />
                  </div>
                  <div>
                    <FormLabel
                      isRequired
                      mt="20px"
                      pl="0"
                      pr="0"
                      textAlign="center"
                      htmlFor="loginUserPassword"
                    >
                      Password:
                    </FormLabel>
                    <Input
                      m="auto"
                      width="430px"
                      id="loginUserPassword"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                </FormControl>
                <FormControl>
                  <Tooltip
                    label="Forgot Password"
                    placement="bottom"
                    bg="red.500"
                  >
                    <Button
                      variantColor="red"
                      variant="solid"
                      w="40%"
                      mt="30px"
                      mr="5%"
                      style={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        cursor: "pointer",
                      }}
                    >
                      Forgot Password
                    </Button>
                  </Tooltip>
                  <Link to={"/HomePage"}>
                    <Tooltip label="Log In" placement="bottom" bg="green.500">
                      <Button
                        rightIcon="arrow-forward"
                        variantColor="green"
                        variant="solid"
                        w="40%"
                        mt="30px"
                        style={{
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => loginAuthAttempt()}
                      >
                        Log In
                      </Button>
                    </Tooltip>
                  </Link>
                </FormControl>
              </div>
            </TabPanel>
            <TabPanel
              height="450px"
              bg="rgb(60, 96, 214, 0.8)"
              style={{
                color: "white",
                border: "none",
                boxShadow: "none",
                outline: "none",
                borderRadius: "0 0 25px 25px",
                borderTop: "2px solid white",
              }}
            >
              <div className="registerTab">
                <FormControl isRequired>
                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      width: "50%",
                    }}
                  >
                    <FormLabel
                      mt="20px"
                      pl="0"
                      pr="0"
                      textAlign="center"
                      htmlFor="fname"
                    >
                      First Name:
                    </FormLabel>
                    <Input
                      m="auto"
                      width="180px"
                      id="fname"
                      placeholder="First Name"
                      onChange={(e) => setRegisterFirstName(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      width: "50%",
                    }}
                  >
                    <FormLabel
                      mt="20px"
                      pl="0"
                      pr="0"
                      textAlign="center"
                      htmlFor="lname"
                    >
                      Last Name:
                    </FormLabel>
                    <Input
                      m="auto"
                      width="180px"
                      id="lname"
                      placeholder="Last Name"
                      onChange={(e) => setRegisterLastName(e.target.value)}
                    />
                  </div>
                  <div>
                    <FormLabel
                      mt="20px"
                      pl="0"
                      pr="0"
                      textAlign="center"
                      htmlFor="username"
                    >
                      Username:
                    </FormLabel>
                    <Input
                      m="auto"
                      width="430px"
                      id="username"
                      placeholder="Username"
                      onChange={(e) => setRegisterUsername(e.target.value)}
                    />
                  </div>
                  <div>
                    <FormLabel
                      mt="20px"
                      pl="0"
                      pr="0"
                      textAlign="center"
                      htmlFor="userEmail"
                    >
                      Email Address:
                    </FormLabel>
                    <Input
                      m="auto"
                      width="430px"
                      id="userEmail"
                      placeholder="Email Address"
                      onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      width: "50%",
                    }}
                  >
                    <FormLabel
                      mt="20px"
                      pl="0"
                      pr="0"
                      textAlign="center"
                      htmlFor="userPass"
                    >
                      Password:
                    </FormLabel>
                    <Input
                      m="auto"
                      width="180px"
                      id="userPass"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      float: "left",
                      width: "50%",
                    }}
                  >
                    <FormLabel
                      mt="20px"
                      pl="0"
                      pr="0"
                      textAlign="center"
                      htmlFor="conUserPass"
                    >
                      Confirm Password:
                    </FormLabel>
                    <Input
                      m="auto"
                      width="180px"
                      id="conUserPass"
                      placeholder="Confirm Password"
                      type="password"
                    />
                  </div>

                  <Tooltip
                    label="Create Account"
                    backgroundColor="green.500"
                    placement="bottom"
                  >
                    <Button
                      rightIcon="check"
                      variantColor="green"
                      variant="solid"
                      w="40%"
                      mt="20px"
                      style={{
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        toast({
                          title: "Account created.",
                          description: "We've created your account for you.",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        });
                        registerAuthAttempt();
                      }}
                    >
                      Register
                    </Button>
                  </Tooltip>
                </FormControl>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}
