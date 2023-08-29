import React from "react";
import { ListItemDetails } from "./ListItemDetails";
import { FilterList } from "./FilterList";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";

export const MasterList = () => {
  let i = [ { id: 1, name: "Item 1" , details: "an example Item"}, { id: 2, name: "Item 2", details: "This is an example Item" } ];


  const [items, setItems] = React.useState(i);
  const [listIndex, setListIndex] = React.useState(0);

  const handleListClick = (item:number) => {
    setListIndex(item);
  }

  const handleDelete = () => {
    let newList = items.filter((_, index) => {
      return index !== listIndex;
    })
    setItems(newList);
    setListIndex(0);
  }
  // the onclick event from the list item sends back target index for the details
  // the onclick/delete event from the details the item at the index. 
  return (
    <>
      <FilterList />
      <ItemsList list={items} handleClick={handleListClick} />
      <ListItemDetails list={items} targetIndex={listIndex} handleDelete={handleDelete}/>
      <AddItem />
    </>
  );
};
