import { FormControl, Input, Button, Box } from "@chakra-ui/core";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import userContext from "../services/userContext";
import "../styles/Chat.css";
import moment from "moment";

const socket = io.connect("http://localhost:3001", {
  transports: ["websocket", "polling"],
});

export default function Chat(props) {
  const { userData, setUserData } = useContext(userContext);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const name = userData.user.username;
    socket.on("message", (message) => {
      setChatMessages((chatMessages) => [...chatMessages, message]);
    });
  }, []);

  console.log(props.class);

  const sendMessage = (e) => {
    e.preventDefault();

    const payload = {
      user: userData.user.username,
      message: message,
    };
    if (message !== "") {
      socket.emit("send", payload);
      setMessage("");
    }
  };

  return (
    <div className={props.chatClass}>
      <div className="ChatTitleSection">
        <h1 id="chatName">{props.chatName}</h1>
      </div>
      <div className={props.icd} style={{ color: "black" }}>
        {chatMessages.map((data, index) => (
          <div className="messageBoxWrapper" key={index}>
            <div className="usernameChatDivMessage">{data.user}</div>
            <div className="chatMessageText">{data.text}</div>
          </div>
        ))}
      </div>
      <FormControl id="formControlInput" display="flex">
        <Input
          float="left"
          width="100%"
          type="text"
          id="messageContent"
          aria-describedby="textContent"
          size="md"
          marginRight="20px"
          marginTop="1px"
          bg="#ede7e3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          float="right"
          size="md"
          height="45px"
          bg="#ffa62b"
          border="none"
          color="black"
          variant="solid"
          type="button"
          onClick={sendMessage}>
          Send
        </Button>
      </FormControl>
    </div>
  );
}
