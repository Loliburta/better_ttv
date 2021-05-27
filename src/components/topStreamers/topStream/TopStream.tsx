interface Props {
  game_name: string;
  language: string;
  thumbnail_url: string;
  title: string;
  user_login: string;
  viewer_count: number;
}
export const TopStream: React.FC<Props> = ({
  game_name,
  language,
  thumbnail_url,
  title,
  user_login,
  viewer_count,
}) => {
  const url = thumbnail_url
    .replace("{width}", "300")
    .replace("{height}", "200");

  return (
    <div className="topStreamers__stream">
      <div className="topStreamers__stream__thumbnail">
        <img src={url} loading="lazy" alt="thumbnail" />
        <div className="topStreamers__stream__thumbnail__count">
          {viewer_count} widzów
        </div>
      </div>
      <div className="topStreamers__stream__info">
        <div className="topStreamers__stream__info__title">{title}</div>
        <div className="topStreamers__stream__info__username">{user_login}</div>
        <div className="topStreamers__stream__info__game">{game_name}</div>
        <div>{language}</div>
      </div>
    </div>
  );
};

// game_id: "516575"
// game_name: "VALORANT"
// id: "42080503677"
// is_mature: false
// language: "en"
// started_at: "2021-05-27T14:52:19Z"
// tag_ids: ["6ea6bca4-4712-4ab9-a906-e3336a9d8039"]
// thumbnail_url: "https://static-cdn.jtvnw.net/previews-ttv/live_user_shroud-{width}x{height}.jpg"
// title: "#VCTPartner NA VS KR |    Follow @shroud on socials"
// type: "live"
// user_id: "37402112"
// user_login: "shroud"
// user_name: "shroud"
// viewer_count: 164594
