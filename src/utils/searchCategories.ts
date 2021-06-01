const clientId = process.env.REACT_APP_CLIENT_ID;
const oauthCode = process.env.REACT_APP_OAUTH_CODE;

export const searchCategories = async (query: string, cursor: string) => {
  let url = `https://api.twitch.tv/helix/search/categories?query=${query}&first=40`;
  if (cursor) {
    url += `&after=${cursor}`;
  }
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "Client-ID": clientId!,
      Authorization: `Bearer ${oauthCode}`,
    }),
  });
  console.log("search categories");
  const result = await res.json();
  return result;
};
