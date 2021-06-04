import { headers } from "./headers";
export interface ResultTypes {
  data: [
    {
      id: string;
      name: string;
      box_art_url: string;
    }
  ];
  pagination: {
    cursor: string;
  };
}
export const searchCategories = async (
  query: string,
  cursor: string
): Promise<ResultTypes> => {
  console.log("Search categories");
  let url = `https://api.twitch.tv/helix/search/categories?query=${query}&first=40`;
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
