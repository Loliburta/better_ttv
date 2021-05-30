const clientId = process.env.REACT_APP_CLIENT_ID;
const oauthCode = process.env.REACT_APP_OAUTH_CODE;

export const getStreamers = async (cursor: string, gameId?: string) => {
  let url = "https://api.twitch.tv/helix/streams?first=40";
  if (cursor) {
    url = "https://api.twitch.tv/helix/streams?first=70"
    url += `&after=${cursor}`;
  }
  if (gameId) {
    url += `&game_id=${gameId}`;
  }
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "Client-ID": clientId!,
      Authorization: `Bearer ${oauthCode}`,
    }),
  });
  console.log("streamers")
  const result = await res.json();
  return result;
};
