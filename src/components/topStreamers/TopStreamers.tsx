import { useState, useEffect } from "react";
import { getStreamers } from "../../utils/getStreamers";
import { TopStream, StreamProps } from "./topStream/TopStream";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";

interface ParamTypes {
  GameName: string;
  GameId: string;
}
export const TopStreamers = () => {
  const { GameId } = useParams<ParamTypes>();
  const [cursor, setCursor] = useState("");
  const [len, setLen] = useState(0);
  const [topStreamersList, setTopStreamersList] = useState<any>([]);
  const fetchStreams = async () => {
    const res = await getStreamers(cursor, GameId);
    setCursor(await res.pagination.cursor);
    const top = await res.data;
    setLen(len + top.length);
    setTopStreamersList([
      ...topStreamersList,
      top.map((stream: StreamProps) => {
        return (
          <TopStream
            key={stream.user_login}
            game_name={stream.game_name}
            language={stream.language}
            thumbnail_url={stream.thumbnail_url
              .replace("{width}", "450")
              .replace("{height}", "254")}
            title={stream.title}
            user_login={stream.user_login}
            viewer_count={stream.viewer_count}
            user_id={stream.user_id}
          />
        );
      }),
    ]);
  };
  useEffect(() => {
    fetchStreams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <InfiniteScroll
        className="topStreamers"
        dataLength={len}
        next={fetchStreams}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {topStreamersList}
      </InfiniteScroll>
    </>
  );
};
