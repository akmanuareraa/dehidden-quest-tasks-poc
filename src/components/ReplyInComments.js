import React from "react";
import axios from "axios";

function ReplyInComments(props) {
  // for reference: https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-update#parameters
  const api = axios.create({
    baseURL: "https://api.twitter.com/1.1",
    headers: {
      Authorization:
        'OAuth oauth_consumer_key="consumer_key",oauth_token="token",,oauth_signature_method="H,MAC-SHA1",,oauth_timestamp="1,515677408",,oauth_nonce="nonce",,oauth_version="1,.0",,oauth_signature="signature"',
    },
    withCredentials: true,
  });

  const postReply = (text, statusId) => {
    return api.get("/statuses/update.json", {
      status: text,
      in_reply_to_status_id: statusId,
      auto_populate_reply_metadata: true,
    });
  };

  return (
    <div>
      <button
        onClick={() => postReply("Hello, this is sample text to reply", "1445880548472328192")}
      >
        3 > Reply to a particular status
      </button>
    </div>
  );
}

export default ReplyInComments;
