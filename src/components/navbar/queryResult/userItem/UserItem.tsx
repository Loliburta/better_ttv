import { Icon } from "@iconify/react";
import userIcon from "@iconify-icons/bx/bx-user";
import { Link } from "react-router-dom";

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
    <>
      {is_live ? (
        <Link to={`${process.env.PUBLIC_URL}/Streamer/${display_name}`}>
          <div className="userItems__item">
            <Icon className="userItems__item__icon" icon={userIcon} />
            <div className="userItems__item__desc">
              <div className="userItems__item__desc__top">
                <div className="userItems__item__desc__top__name">
                  {display_name}
                </div>
                <div className="userItems__item__desc__top__dot"></div>
              </div>
              <div className="userItems__item__desc__game">
                Playing {game_name}
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="userItems__item--short">
          <Icon className="userItems__item__icon" icon={userIcon} />
          <div className="userItems__item__desc__top__name">{display_name}</div>
        </div>
      )}
    </>
  );
};
