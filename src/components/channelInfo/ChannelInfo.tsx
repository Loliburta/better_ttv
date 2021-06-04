import { useState, useEffect, useRef } from "react";
import { getUser } from "../../utils/getUser";
import { readableDate } from "../../utils/readableDate";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Icon } from "@iconify/react";
import profileSVG from "@iconify-icons/ant-design/profile-outlined";
import closeSVG from "@iconify-icons/bi/x-lg";

interface Props {
  user_id: string;
}
interface UserTypes {
  profile_image_url: string;
  display_name: string;
  broadcaster_type: string;
  view_count: number;
  description: string;
}
export const ChannelInfo: React.FC<Props> = ({ user_id }) => {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState<JSX.Element>();
  const [user, setUser] = useState<UserTypes>();
  const [date, setDate] = useState("");
  const profile = useRef(null);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser(user_id);
      setUser(res);
      setDate(readableDate(new Date(res.created_at)));
      setOpen(true);
      setIcon(<Icon className="profileIcon__svg" icon={profileSVG} />);
    };
    fetchUser();
  }, [user_id]);
  useClickOutside(profile, setOpen);
  return (
    <>
      {open ? (
        <div
          className={open ? "channelInfo" : "channelInfo--closed"}
          id="channelInfo"
          ref={profile}
        >
          <div className="channelInfo__close" onClick={() => setOpen(false)}>
            <Icon className="channelInfo__close__svg" icon={closeSVG} />
          </div>
          <div className="channelInfo__top">
            <div className="channelInfo__top__image">
              <img
                className="channelInfo__top__image__img"
                src={user?.profile_image_url}
                alt="profile"
              />
            </div>
            <div className="channelInfo__top__info">
              <div className="channelInfo__top__info__name">
                {user?.display_name}
              </div>
              <div className="channelInfo__top__info__type">
                {user?.broadcaster_type}
              </div>
              <div className="channelInfo__top__info__views">
                {user?.view_count} views
              </div>
              <div className="channelInfo__top__info__created">{date}</div>
            </div>
          </div>
          <div className="channelInfo__description">
            <div className="">{user?.description}</div>
          </div>
        </div>
      ) : (
        <div
          className={open ? "profileIcon--closed" : "profileIcon"}
          onClick={() => setOpen(true)}
        >
          {icon}
        </div>
      )}
    </>
  );
};
