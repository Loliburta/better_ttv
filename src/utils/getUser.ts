import { headers } from "./headers";

interface ResultTypes {
  data: [
    {
      id: string;
      login: string;
      display_name: string;
      type: string;
      broadcaster_type: string;
      description: string;
      profile_image_url: string;
      offline_image_url: string;
      view_count: number;
      email: string;
      created_at: string;
    }
  ];
}
export const getUser = async (user_id: string) => {
  console.log("Get User");
  const url = `https://api.twitch.tv/helix/users?id=${user_id}`;
  const res = await fetch(url, {
    method: "GET",
    headers,
  });
  const result: ResultTypes = await res.json();
  return result.data[0];
};
