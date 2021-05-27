import { useState, useEffect } from "react";
import { getTopStreamers } from "../../utils/getTopStreamers";
import { TopStream } from "./topStream/TopStream";

interface streamProps {
  game_name: string;
  language: string;
  thumbnail_url: string;
  title: string;
  user_login: string;
  viewer_count: number;
}
export const TopStreamers = () => {
  const [topStreamersList, setTopStreamersList] = useState([]);
  useEffect(() => {
    (async () => {
      let top = await getTopStreamers();
      console.log(top);
      setTopStreamersList(
        top.map((stream: streamProps) => {
          return (
            <TopStream
              key={stream.user_login}
              game_name={stream.game_name}
              language={stream.language}
              thumbnail_url={stream.thumbnail_url}
              title={stream.title}
              user_login={stream.user_login}
              viewer_count={stream.viewer_count}
            />
          );
        })
      );
    })();
  }, []);
  return <div className="topStreamers">{topStreamersList}</div>;
};
