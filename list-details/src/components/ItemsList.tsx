import React from "react";
import IListItem from "../interfaces/IListItem";

export const ItemsList = (props: { list: IListItem[]; }) => {

  return (
    <div>
      {props.list.map((item:IListItem) => (
        <button key={item.id}>{item.name}</button>
      ))}
    </div>
  );

};
