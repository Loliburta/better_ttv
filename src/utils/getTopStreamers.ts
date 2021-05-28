const clientId = process.env.REACT_APP_CLIENT_ID;
const oauthCode = process.env.REACT_APP_OAUTH_CODE;

export const getTopStreamers = async (cursor: string) => {
  let url = "https://api.twitch.tv/helix/streams?first=70";
  if (cursor) {
    url = `${url}&after=${cursor}`;
  }
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "Client-ID": clientId!,
      Authorization: `Bearer ${oauthCode}`,
    }),
  });
  const result = await res.json();
  return result;
};
