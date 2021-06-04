import { useState } from "react";
import { Link } from "react-router-dom";
import { ChannelInfo } from "../../channelInfo/ChannelInfo";

export interface StreamProps {
  game_name: string;
  language: string;
  thumbnail_url: string;
  title: string;
  user_login: string;
  viewer_count: number;
  user_id: string;
}

export const TopStream: React.FC<StreamProps> = ({
  game_name,
  language,
  thumbnail_url,
  title,
  user_login,
  viewer_count,
  user_id,
}) => {
  const [profile, setProfile] = useState<JSX.Element>();
  const fetchProfile = async () => {
    if (!profile) {
      setProfile(<ChannelInfo user_id={user_id} />);
    }
  };
  const url = thumbnail_url
    .replace("{width}", "450")
    .replace("{height}", "254");
  return (
    <>
      <div className="topStreamers__stream">
        {profile ? profile : ""}

        <Link to={`${process.env.PUBLIC_URL}/Streamer/${user_login}`}>
          <div className="topStreamers__stream__thumbnail">
            <img
              className="topStreamers__stream__thumbnail__img"
              src={url}
              loading="lazy"
              alt="thumbnail"
            />
            <div className="topStreamers__stream__thumbnail__count">
              {viewer_count} widzów
            </div>
          </div>
        </Link>
        <div className="topStreamers__stream__info">
          <div className="topStreamers__stream__info__title">{title}</div>
          <div className="topStreamers__stream__info__username">
            <p
              onClick={fetchProfile}
              className="topStreamers__stream__info__username__text"
            >
              {user_login}
            </p>
          </div>
          <div className="topStreamers__stream__info__game">{game_name}</div>
          <div>{language}</div>
        </div>
      </div>
    </>
  );
};
