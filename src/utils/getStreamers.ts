import { headers } from "./headers";

interface ResultTypes {
  data: [
    {
      game_name: string;
      language: string;
      thumbnail_url: string;
      title: string;
      user_login: string;
      viewer_count: number;
      user_id: string;
    }
  ];
  pagination: {
    cursor: string;
  };
}
export const getStreamers = async (
  cursor: string,
  gameId?: string
): Promise<ResultTypes> => {
  console.log("Get Streamers");
  let url = "https://api.twitch.tv/helix/streams?first=40";
  if (cursor) {
    url = "https://api.twitch.tv/helix/streams?first=70";
    url += `&after=${cursor}`;
  }
  if (gameId) {
    url += `&game_id=${gameId}`;
  }
  const res = await fetch(url, {
    method: "GET",
    headers,
  });
  const result = await res.json();
  return result;
};
