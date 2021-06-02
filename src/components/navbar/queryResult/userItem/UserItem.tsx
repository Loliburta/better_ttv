export interface UserItemProps {
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
}
export const UserItem: React.FC<UserItemProps> = ({
  display_name,
  game_id,
  game_name,
  id,
  is_live,
}) => {
  return (
    <div>
      <div>{display_name}</div>
    </div>
  );
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
