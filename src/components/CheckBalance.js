import React from "react";
import axios from "axios";

function CheckBalance(props) {
  const handleInput = (e) => {
    let address = e.currentTarget.value;
    console.log("Input Received: ", e.currentTarget.value);
    props.setAppState({ ...props.appState, address: address });
  };

  const checkBalance = async (address, chain) => {
    console.log("Checking Balance for: ", address, " in chain - ", chain);

    const options = {
      method: "GET",
      url: "https://deep-index.moralis.io/api/v2/" + address + "/balance",
      params: { chain: chain },
      headers: {
        accept: "application/json",
        "X-API-Key":
          "hBKMMFQMRJJZFNyc718a0NpPmY1tomdBe68FS5hXDfN7fWnvzDdx4eyEknDNRrez",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log("Axios Response for Balance: ", response.data.balance);
        props.setAppState({
          ...props.appState,
          balance: response.data.balance,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div>
      <p>Enter Wallet Address: </p>
      <input onInput={(e) => handleInput(e)}></input>
      <button onClick={() => checkBalance(props.appState.address, "mumbai")}>
        1 > Check Balance
      </button>
    </div>
  );
}

export default CheckBalance;
