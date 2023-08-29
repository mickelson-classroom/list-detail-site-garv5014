import React from "react";
import { ListItemDetails } from "./ListItemDetails";
import { FilterList } from "./FilterList";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";

export const MasterList = () => {
  let items = [ { id: 1, name: "Item 1" , details: "This is an example Item"}, { id: 2, name: "Item 2", details: "This is an example Item" } ];

  const [listIndex, setListIndex] = React.useState(0);

  const handleListClick = () => {}

  const handleDelete = () => {}
  // the onclick event from the list item sends back target index for the details
  // the onclick/delete event from the details the item at the index. 
  return (
    <>
      <FilterList />
      <ItemsList list={items} handleClick={handleListClick} />
      <ListItemDetails list={items} targetIndex={listIndex} handleDelete={handleListClick}/>
      <AddItem />
    </>
  );
};
