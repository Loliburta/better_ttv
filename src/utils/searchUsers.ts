const clientId = process.env.REACT_APP_CLIENT_ID;
const oauthCode = process.env.REACT_APP_OAUTH_CODE;

export const searchUsers = async (query: string, cursor: string) => {
  let url = `https://api.twitch.tv/helix/search/channels?query=${query}&first=40`;
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
  console.log("search users");
  const result = await res.json();
  return result;
};

// {
//     "data": [
//       {
//         "broadcaster_language": "en",
//         "broadcaster_login": "loserfruit",
//         "display_name": "Loserfruit",
//         "game_id": "498000",
//         "game_name": "House Flipper",
//         "id": "41245072",
//         "is_live": false,
//         "tags_ids": [],
//         "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/fd17325a-7dc2-46c6-8617-e90ec259501c-profile_image-300x300.png",
//         "title": "loserfruit",
//         "started_at": ""
//       },
//   ... ],
//     "pagination": {
//       "cursor": "Mg=="
//     }
//   }
