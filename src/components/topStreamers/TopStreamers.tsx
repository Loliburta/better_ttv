import { useState, useEffect } from "react";
import { getTopStreamers } from "../../utils/getTopStreamers";
import { TopStream } from "./topStream/TopStream";
import InfiniteScroll from "react-infinite-scroll-component";

interface streamProps {
  game_name: string;
  language: string;
  thumbnail_url: string;
  title: string;
  user_login: string;
  viewer_count: number;
}
export const TopStreamers = () => {
  const [cursor, setCursor] = useState("");
  const [len, setLen] = useState(0);
  const [topStreamersList, setTopStreamersList] = useState<any>([]);
  let fetchStreams = async () => {
    let res = await getTopStreamers(cursor);
    console.log(await res);
    setCursor(await res.pagination.cursor);
    let top = await res.data;
    console.log("called streams api");
    setLen(len + top.length);
    setTopStreamersList([
      ...topStreamersList,
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