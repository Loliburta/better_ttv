const clientId = process.env.REACT_APP_CLIENT_ID;
const oauthCode = process.env.REACT_APP_OAUTH_CODE;

export const getTopStreamers = async () => {
  const res = await fetch("https://api.twitch.tv/helix/streams", {
    method: "GET",
    headers: new Headers({
      "Client-ID": clientId!,
      Authorization: `Bearer ${oauthCode}`,
    }),
  });
  const result = await res.json();
  return result.data;
};
