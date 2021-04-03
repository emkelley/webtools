const qs = require("querystring");
const axios = require("axios");

exports.handler = async (event, context, callback) => {
  const requestParams = event.queryStringParameters;
  if (!requestParams.twitchID || !requestParams.twitchUsername)
    callback(null, {
      statusCode: 400,
    });

  const opts = {
    client_id: process.env.VUE_APP_TWITCH_CLIENT_ID,
    client_secret: process.env.VUE_APP_TWITCH_CLIENT_SECRET,
    grant_type: "client_credentials",
    scopes: "",
  };

  const tokenParams = qs.stringify(opts);

  const { data } = await axios.post(
    `https://id.twitch.tv/oauth2/token?${tokenParams}`
  );

  const {
    data: { data: streams },
  } = await axios.get(
    `https://api.twitch.tv/helix/streams?user_id=${requestParams.twitchID}`,
    {
      headers: {
        "Client-ID": process.env.VUE_APP_TWITCH_CLIENT_ID,
        Authorization: `Bearer ${data.access_token}`,
      },
    }
  );

  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      live: streams.length ? true : false,
      streamData: streams,
    }),
  });
};
