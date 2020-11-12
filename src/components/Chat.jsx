import { FormControl, Input, Button, Box } from "@chakra-ui/core";
import React, { useContext } from "react";
import { useState } from "react";
import userContext from "../services/userContext";
import "../styles/Chat.css";

export default function Chat({ chatType }) {
  const [message, setMessage] = useState();
  const [chatMessages, setChatMessages] = useState();

  const sendMessage = (e) => {
    e.preventDefault();
    chatMessages.push(<Box bg="blue" maxW="100px"></Box>);
  };

  return (
    <div className="ChatBox">
      <div className="ChatTitleSection">
        <h1 id="chatName">{chatType} Chat</h1>
      </div>
      <div className="InnerChatDiv"></div>
      <FormControl id="formControlInput">
        <Input
          float="left"
          width="270px"
          type="text"
          id="messageContent"
          aria-describedby="textContent"
          size="md"
          marginRight="20px"
          marginTop="1px"
          bg="#ede7e3"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          float="left"
          size="md"
          height="45px"
          bg="#ffa62b"
          border="none"
          color="black"
          variant="solid"
          onClick={(e) => sendMessage(e)}>
          Send
        </Button>
      </FormControl>
    </div>
  );
}
