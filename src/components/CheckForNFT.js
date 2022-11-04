import React from "react";
import axios from "axios";

function CheckForNFT(props) {
  let tokenId = null,
    contractAddress = null,
    walletAddressToCheck = null;

  const handleInput = (keyParam, e) => {
    let value = e.currentTarget.value;
    if(keyParam === "tokenId") tokenId = value;
    if(keyParam === "contractAddress") contractAddress = value;
    if(keyParam === "walletAddressToCheck") walletAddressToCheck = value;
    console.log("Input Received: ", keyParam, e.currentTarget.value);
    console.log(
      "Printing Stored Values: ",
      tokenId,
      contractAddress,
      walletAddressToCheck
    )
  };

  const checkforNFT = (
    tokenId,
    contractAddress,
    walletAddressToCheck,
    chain
  ) => {
    const options = {
      method: "GET",
      url:
        "https://deep-index.moralis.io/api/v2/nft/" +
        contractAddress +
        "/" +
        tokenId +
        "/owners",
      params: { chain: chain, format: "decimal" },
      headers: {
        accept: "application/json",
        "X-API-Key":
          "hBKMMFQMRJJZFNyc718a0NpPmY1tomdBe68FS5hXDfN7fWnvzDdx4eyEknDNRrez",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log("Axios Response for NFT Check: ", response.data.result);
        let result = response.data.result.find(
          ({ owner_of }) => owner_of === walletAddressToCheck
        );
        console.log("NFT Verification Result: ", result);
        if (result) {
          alert("NFT Owned by the User");
        } else {
          alert("NFT Not Owned by the User. CTA");
        }
      })
      .catch(function (error) {
        console.error("Error occured while checking for NFT: ", error);
      });
  };

  return (
    <div>
      <div>
        <p>Enter Token Id: </p>
        <input onInput={(e) => handleInput("tokenId", e)}></input>
        <p>Enter Contract Address: </p>
        <input onInput={(e) => handleInput("contractAddress", e)}></input>
        <p>Enter Wallet Address to Check for: </p>
        <input onInput={(e) => handleInput("walletAddressToCheck", e)}></input>
      </div>
      <button
        onClick={() =>
          checkforNFT(
            tokenId,
            contractAddress,
            walletAddressToCheck,
            "mumbai"
          )
        }
      >
        2 > Check if the NFT is held by the user
      </button>
    </div>
  );
}

export default CheckForNFT;
