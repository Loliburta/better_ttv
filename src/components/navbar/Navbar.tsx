import { useState, useEffect, useCallback, useRef } from "react";
import { searchCategories } from "../../utils/searchCategories";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import searchIcon from "@iconify-icons/akar-icons/search";
import twitchIcon from "@iconify-icons/bi/twitch";
import { CategoryItem } from "./queryResult/categoryItem/CategoryItem";
import { useClickOutside } from "../../hooks/useClickOutside";
interface CategoryItemProps {
  id: string;
  name: string;
  box_art_url: string;
}
export const Navbar = () => {
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
    debounce(async (query: string, cursor: string) => {
      let res = { data: [] };
      if (query.length > 0) {
        res = await searchCategories(query, cursor);
        if (res?.data?.length > 0) {
          setSearchResult(
            <div className={open ? "categoryItems" : "categoryItems--closed"}>
              {res.data.map((val: CategoryItemProps) => {
                return (
                  <CategoryItem
                    key={val.id}
                    id={val.id}
                    name={val.name}
                    box_art_url={val.box_art_url}
                  />
                );
              })}
            </div>
          );
        } else {
          setSearchResult(null);
        }
      } else {
        res = { data: [] };
        setSearchResult(null);
      }
    }, 500),
    []
  );
  useEffect(() => {
    debouncedSearch(query, cursor);
  }, [query, cursor, debouncedSearch]);
  return (
    <div className="navbar">
      <Link className="navbar__twitch" to={`${process.env.PUBLIC_URL}/`}>
        <Icon icon={twitchIcon} />
      </Link>
      <div className="navbar__wrapper" ref={wrapperRef}>
        <div
          className="navbar__wrapper__searchDiv"
          onClick={() => setOpen(true)}
        >
          <input
            type="text"
            className="navbar__wrapper__searchDiv__search"
            placeholder="Search"
            onChange={(e) => handleChange(e)}
            value={query}
            id="input"
          ></input>
          <label htmlFor="input">
            <div className="navbar__wrapper__searchDiv__icon">
              <Icon
                icon={searchIcon}
                className="navbar__wrapper__searchDiv__icon__svg"
              />
            </div>
          </label>
        </div>

        {searchResult ? searchResult : ""}
      </div>
    </div>
  );
};

// data: Array(36)
// 0:
// box_art_url: "https://static-cdn.jtvnw.net/ttv-boxart/./League%20of%20Legends:%20Wild%20Rift-52x72.jpg"
// id: "514858"
// name: "League of Legends: Wild Rift"
