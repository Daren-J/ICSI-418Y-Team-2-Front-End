<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
=======
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { ThemeProvider } from "@chakra-ui/core";
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
>>>>>>> eaa47c7fb014c228141ea283b1a2446a9079864e
