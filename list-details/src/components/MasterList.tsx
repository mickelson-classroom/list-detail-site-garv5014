import React from "react";
import { ListItemDetails } from "./ListItemDetails";
import { FilterList } from "./FilterList";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";

export const MasterList = () => {
  let items = [ { id: 1, name: "Item 1" , details: "This is an example Item"}, { id: 2, name: "Item 2", details: "This is an example Item" } ];


  return (
    <>
      <FilterList />
      <ItemsList list={items} />
      <ListItemDetails />
      <AddItem />
    </>
  );
};
