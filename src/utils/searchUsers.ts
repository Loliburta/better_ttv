import { headers } from "./headers";
export interface ResultTypes {
  data: [
    {
      broadcaster_language: string;
      broadcaster_login: string;
      display_name: string;
      game_id: string;
      game_name: string;
      id: string;
      is_live: boolean;
      tag_ids: string[];
      thumbnail_url: string;
      title: string;
      started_at: string;
    }
  ];
  pagination: {
    cursor: string;
  };
}
export const searchUsers = async (
  query: string,
  cursor: string
): Promise<ResultTypes> => {
  console.log("Search users");
  let url = `https://api.twitch.tv/helix/search/channels?query=${query}&first=40`;
  if (cursor) {
    url += `&after=${cursor}`;
  }
  const res = await fetch(url, {
    method: "GET",
    headers,
  });
  const result = await res.json();
  return result;
};
