import { useState, useEffect, useCallback, useRef } from "react";
import { searchCategories } from "../../utils/searchCategories";
import { searchUsers } from "../../utils/searchUsers";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/akar-icons/search";
import twitchIcon from "@iconify-icons/bi/twitch";
import categoryIcon from "../../icons/Category.svg";
import userIcon from "@iconify-icons/bx/bx-user";
import {
  CategoryItem,
  CategoryItemProps as CategoryItemTypes,
} from "./queryResult/categoryItem/CategoryItem";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  UserItem,
  UserItemProps as UserItemTypes,
} from "./queryResult/userItem/UserItem";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";

export const Navbar = () => {
  const [option, setOption] = useState(false);

  const [open, setOpen] = useState(true);
  const [cursor, setCursor] = useState("");
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, setOpen);

  useEffect(() => {
    if (!open) {
      setSearchResult(null);
      setQuery("");
    }
  }, [open]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    setQuery(e.target.value);
    if (cursor !== "") {
      setCursor("");
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce(async (query: string, cursor: string, option: boolean) => {
      setSearchResult(null);
      let res = { data: [] };
      if (query.length > 0 && option === true) {
        res = await searchUsers(query, cursor);
        if (res?.data?.length > 0) {
          setSearchResult(
            <div className={open ? "userItems" : "userItems--closed"}>
              {res.data.map((usr: UserItemTypes) => {
                return (
                  <UserItem
                    key={usr.id}
                    id={usr.id}
                    display_name={usr.display_name}
                    game_name={usr.game_name}
                    game_id={usr.game_id}
                    is_live={usr.is_live}
                  />
                );
              })}
            </div>
          );
        }
      } else if (query.length > 0) {
        res = await searchCategories(query, cursor);
        if (res?.data?.length > 0) {
          setSearchResult(
            <div className={open ? "categoryItems" : "categoryItems--closed"}>
              {res.data.map((cat: CategoryItemTypes) => {
                return (
                  <CategoryItem
                    key={cat.id}
                    id={cat.id}
                    name={cat.name}
                    box_art_url={cat.box_art_url}
                  />
                );
              })}
            </div>
          );
        }
      }
    }, 500),
    []
  );
  useEffect(() => {
    debouncedSearch(query, cursor, option);
  }, [query, cursor, debouncedSearch, option]);
  return (
    <div className="navbar">
      <Link className="navbar__twitch" to={`${process.env.PUBLIC_URL}/`}>
        <Icon icon={twitchIcon} />
      </Link>
      <div className="navbar__search">
        <div className="navbar__search__mid" ref={wrapperRef}>
          <div
            className="navbar__search__mid__searchDiv"
            onClick={() => setOpen(true)}
          >
            <input
              type="text"
              className="navbar__search__mid__searchDiv__input"
              placeholder="Search"
              onChange={(e) => handleChange(e)}
              value={query}
              id="input"
            ></input>

            <label htmlFor="input">
              <div className="navbar__search__mid__searchDiv__icon">
                <Icon
                  icon={searchIcon}
                  className="navbar__search__mid__searchDiv__icon__svg"
                />
              </div>
            </label>
          </div>
          {searchResult ? searchResult : ""}
        </div>
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <img className="categoryIcon" src={categoryIcon} alt="category" />
          </Grid>
          <Grid item>
            <Switch checked={option} onChange={() => setOption(!option)} />
          </Grid>
          <Grid item>
            <Icon className="userIcon" icon={userIcon} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
