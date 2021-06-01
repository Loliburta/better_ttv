const clientId = process.env.REACT_APP_CLIENT_ID;
const oauthCode = process.env.REACT_APP_OAUTH_CODE;

export const getUser = async (user_id: string) => {
  let url = `https://api.twitch.tv/helix/users?id=${user_id}`;
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "Client-ID": clientId!,
      Authorization: `Bearer ${oauthCode}`,
    }),
  });
  const result = await res.json();
  return result.data[0];
};
