import React, { useState } from "react";
import axios from "axios";

function TweetWithTag(props) {
  // for reference: https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets#tab0
  const api = axios.create({
    baseURL: "https://api.twitter.com/1.1",
    headers: {
      Authorization:
        'OAuth oauth_consumer_key="consumer_key",oauth_token="token",,oauth_signature_method="H,MAC-SHA1",,oauth_timestamp="1,515677408",,oauth_nonce="nonce",,oauth_version="1,.0",,oauth_signature="signature"',
    },
    withCredentials: true,
  });

  const [link, setLink] = useState();

  const postTweet = (text, statusId, accountToBeTagged) => {
    return api.get("/statuses/update.json", {
      status: text + accountToBeTagged,
      in_reply_to_status_id: statusId,
      auto_populate_reply_metadata: true,
    });
  };

  return (
    <div>
      {/* <a href="https://twitter.com/intent/tweet?text=I%20am%20tagging%20%40${account}&utm_source=dehidden.com&utm_medium=dehiddden_quest">
        Tweet
      </a> */}
      <button
        onClick={() => {
          let link =
            "https://twitter.com/intent/tweet?text=I%20am%20tagging%20%40@manu_areraa&utm_source=dehidden.com&utm_medium=dehiddden_quest";
          setLink(link);
          // postTweet(
          //   "Hello, this is sample text to reply",
          //   "1445880548472328192",
          //   "@testaccount"
          // );
        }}
      >
        4 > Post a Tweet
      </button>
    </div>
  );
}

export default TweetWithTag;
