import { FC } from "react";
import IListItem from "../interfaces/IListItem";

export const ItemsList: FC<{
  list: IListItem[];
  handleClick: (item: IListItem) => void;
}> = ({ list, handleClick }) => {
  return (
    <div>
      {list.map((item: IListItem) => (
        <div className="btn"
          key={item.id}
          onClick={() => {
            handleClick(item);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};
