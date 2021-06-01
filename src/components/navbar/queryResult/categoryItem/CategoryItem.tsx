import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  box_art_url: string;
}
export const CategoryItem: React.FC<Props> = ({ id, name, box_art_url }) => {
  return (
    <>
      {/* redirect is for infinite scroll to update instead of adding items to the end */}
      <Link to={`${process.env.PUBLIC_URL}/redirect/${name}/${id}`}>
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
