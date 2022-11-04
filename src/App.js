import React, { useState } from "react";
import "./App.css";
import CheckBalance from "./components/CheckBalance";
import CheckForNFT from "./components/CheckForNFT";
import ReplyInComments from "./components/ReplyInComments";
import TweetWithTag from "./components/TweetWithTag";

function App() {
  const [appState, setAppState] = useState({});

  return (
    <>
      <CheckBalance appState={appState} setAppState={setAppState} />
      <CheckForNFT appState={appState} setAppState={setAppState} />
      <ReplyInComments appState={appState} setAppState={setAppState} />
      <TweetWithTag appState={appState} setAppState={setAppState} />
    </>
  );
}

export default App;
