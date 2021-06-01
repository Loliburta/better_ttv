import { useState, useRef } from "react";
import { Link } from "react-router-dom";


interface Props {
  id: string;
  name: string;
  box_art_url: string;
}
export const CategoryItem: React.FC<Props> = ({ id, name, box_art_url }) => {
 
  return (
    <>
      <Link to={`${process.env.PUBLIC_URL}/StreamersForGame/${name}/${id}`}>
        <div className="categoryItems__item">
          <img
            className="categoryItems__item__img"
            src={box_art_url}
            alt="Category"
          />
          <div className="categoryItems__item__name">{name}</div>
        </div>
      </Link>
    </>
  );
};
