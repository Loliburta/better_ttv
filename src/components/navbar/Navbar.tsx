import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/akar-icons/search";
import twitchIcon from "@iconify-icons/bi/twitch";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__twitch" to={`${process.env.PUBLIC_URL}/`}>
        <Icon icon={twitchIcon} />
      </Link>
      <div className="navbar__searchDiv">
        <input
          type="text"
          className="navbar__searchDiv__search"
          placeholder="Search"
        ></input>
        <div className="navbar__searchDiv__icon">
          <Icon icon={searchIcon} className="navbar__searchDiv__icon__svg" />
        </div>
      </div>
    </div>
  );
};
