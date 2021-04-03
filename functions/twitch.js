const qs = require("querystring");
const axios = require("axios");

exports.handler = async (event, context, callback) => {
  const { query } = event.queryStringParameters;
  if (!query)
    return callback(null, {
      statusCode: 400,
    });

  const opts = {
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
    grant_type: "client_credentials",
    scopes: "",
  };

  const tokenParams = qs.stringify(opts);

  const {
    data: { access_token },
  } = await axios.post(`https://id.twitch.tv/oauth2/token?${tokenParams}`);

  let endpoint;

  if (Number(query)) {
    endpoint = `https://api.twitch.tv/helix/channels?broadcaster_id=${query}`;
  } else {
    endpoint = `https://api.twitch.tv/helix/users?login=${query}`;
  }
  console.log(endpoint);
  const {
    data: { data },
  } = await axios.get(endpoint, {
    headers: {
      "Client-ID": process.env.TWITCH_CLIENT_ID,
      Authorization: `Bearer ${access_token}`,
    },
  });
  if (Number(query)) {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data[0].broadcaster_name,
      }),
    });
  } else {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data[0]),
    });
  }
};
