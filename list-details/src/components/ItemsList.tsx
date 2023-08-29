import { MouseEventHandler } from "react";
import IListItem from "../interfaces/IListItem";

export const ItemsList = (props: { list: IListItem[]; handleClick: (item:IListItem) => void }) => {

  return (
    <div>
      {props.list.map((item:IListItem) => (
        <button key={item.id} onClick={() => {props.handleClick(item)}}>{item.name}</button>
      ))}
    </div>
  );

};
