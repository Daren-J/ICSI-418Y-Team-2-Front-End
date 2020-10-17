import { FormControl, Input, Button } from "@chakra-ui/core";
import React from "react";
import "../styles/Chat.css";

export default function Chat() {
  return (
    <div className="ChatBox">
      <div className="ChatTitleSection">
        <h1 id="chatName">Chat</h1>
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
        />
        <Button
          float="left"
          size="md"
          height="45px"
          variantColor="blue"
          color="black"
          variant="solid"
        >
          Send
        </Button>
      </FormControl>
    </div>
  );
}
