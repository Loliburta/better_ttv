const clientId = process.env.REACT_APP_CLIENT_ID;
const oauthCode = process.env.REACT_APP_OAUTH_CODE;
export const getTopGames = async () => {
  const res = await fetch("https://api.twitch.tv/helix/games/top?first=50", {
    method: "GET",
    headers: new Headers({
      "Client-ID": clientId!,
      Authorization: `Bearer ${oauthCode}`,
    }),
  });
  const result = await res.json();
  console.log(result);
  return result.data;
};
