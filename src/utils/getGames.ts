import { headers } from "./headers";

interface ResultTypes {
  data: [
    {
      id: string;
      name: string;
      box_art_url: string;
    }
  ];
  pagination: { cursor: string };
}
export const getGames = async (cursor: string): Promise<ResultTypes> => {
  console.log("Get Games");
  let url = "https://api.twitch.tv/helix/games/top?first=100";
  if (cursor) {
    url = `${url}&after=${cursor}`;
  }
  const res = await fetch(url, {
    method: "GET",
    headers,
  });
  const result = await res.json();
  return result;
};
