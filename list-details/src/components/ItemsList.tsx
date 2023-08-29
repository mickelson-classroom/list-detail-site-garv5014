import { MouseEventHandler } from "react";
import IListItem from "../interfaces/IListItem";

export const ItemsList = (props: { list: IListItem[]; handleClick: (index:number) => void }) => {

  return (
    <div>
      {props.list.map((item:IListItem,index) => (
        <button key={item.id} onClick={() => {props.handleClick(index)}}>{item.name}</button>
      ))}
    </div>
  );

};
