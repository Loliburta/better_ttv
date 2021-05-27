import { App } from "../../App";

interface Props {
  id: string;
  name: string;
  box_art_url: string;
}
export const TopGame: React.FC<Props> = ({ id, name, box_art_url }) => {
  return (
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{box_art_url}</div>
    </div>
  );
};
