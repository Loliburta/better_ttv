import { useState, useEffect } from "react";
import { getGames } from "../../utils/getGames";
import { TopGame } from "./topGame/TopGame";
import InfiniteScroll from "react-infinite-scroll-component";

export const TopGames = () => {
  const [topGamesList, setTopGamesList] = useState<any>([]);
  const [cursor, setCursor] = useState("");
  const [len, setLen] = useState(0);
  const fetchGames = async () => {
    const res = await getGames(cursor);
    setCursor(res.pagination.cursor);
    const top = res.data;
    setLen(len + top.length);
    setTopGamesList([
      ...topGamesList,
      top.map((game: { id: string; name: string; box_art_url: string }) => {
        return (
          <TopGame
            key={game.id}
            id={game.id}
            name={game.name}
            box_art_url={game.box_art_url}
          />
        );
      }),
    ]);
    return topGamesList;
  };
  useEffect(() => {
    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <InfiniteScroll
        className="topGames"
        dataLength={len}
        next={fetchGames}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {topGamesList}
      </InfiniteScroll>
    </>
  );
};
