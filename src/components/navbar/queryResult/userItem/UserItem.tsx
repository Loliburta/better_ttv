import { Icon } from "@iconify/react";
import userIcon from "@iconify-icons/bx/bx-user";
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
    <div className="userItems__item">
      <Icon className="userItems__item__icon" icon={userIcon} />
      <div>{display_name}</div>
    </div>
  );
};
