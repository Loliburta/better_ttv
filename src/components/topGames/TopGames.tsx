import { useState, useEffect } from "react";
import { getTopGames } from "../../utils/getTopGames";
import { TopGame } from "./topGame/TopGame";
export const TopGames = () => {
  const [topGames, setTopGames] = useState(<></>);
  useEffect(() => {
    (async () => {
      let top = await getTopGames();
      setTopGames(
        top.map((game: { id: string; name: string; box_art_url: string }) => {
          return (
            <TopGame
              key={game.id}
              id={game.id}
              name={game.name}
              box_art_url={game.box_art_url}
            />
          );
        })
      );
    })();
  }, []);

  return <div>{topGames}</div>;
};
