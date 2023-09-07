import { FC } from "react";
import IListItem from "../interfaces/IListItem";

export const ItemsList: FC<{
  list: IListItem[];
  handleClick: (item: IListItem) => void;
}> = ({ list, handleClick }) => {
  return (
    <div className="container mt-4">
      {list.map((item: IListItem) => (
        <div className="row mb-4">
          <div
            className="btn btn-outline-primary"
            key={item.id}
            onClick={() => {
              handleClick(item);
            }}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};
