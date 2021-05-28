import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/akar-icons/search";
export const Navbar = () => {
  return (
    <div className="navbar">
      <input
        type="text"
        className="navbar__search"
        placeholder="Search"
      ></input>
      <div className="navbar__icon">
        <Icon icon={searchIcon} className="navbar__icon__svg" />
      </div>
    </div>
  );
};
