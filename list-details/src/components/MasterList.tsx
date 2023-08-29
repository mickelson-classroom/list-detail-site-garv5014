import React from "react";
import { ListItemDetails } from "./ListItemDetails";
import { FilterList } from "./FilterList";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";
import IListItem from "../interfaces/IListItem";

export const MasterList = () => {
  let i = [
    { id: 1, name: "Item 1", details: "an example Item" },
    { id: 2, name: "Item 2", details: "This is an example Item" },
  ];

  const [items, setItems] = React.useState(i);
  const [filteredItems, setFilteredItems] = React.useState(i);
  const [detailItem, setDetailItem] = React.useState(i[0]);
  const [isFilter, setIsFilter] = React.useState(false);

  const handleListClick = (item: IListItem) => {
    setDetailItem(item);
  };

  const handleOnFilterChange = (targteStr: string) => {
    let newList = items.filter((item) => {
      return item.details.includes(targteStr);
    });
    if (targteStr === "") {
      setIsFilter(false);
    }
    if (newList.length === 0) {
      setIsFilter(() => true);
      setFilteredItems(() => [{ id: 0, name: "No Items", details: " " }]);
      setDetailItem(() => filteredItems[0]);
    } else {
      setFilteredItems(newList);
      setDetailItem(newList[0]);
      setIsFilter(true);
    }
  };

  const handleDelete = () => {
    let newList = items.filter((item) => {
      return item.id !== detailItem.id;
    });
    setItems(newList);
    setDetailItem(newList[0]);
  };
  // the onclick event from the list item sends back target index for the details
  // the onclick/delete event from the details the item at the index.
  return (
    <>
      <FilterList handleOnChange={handleOnFilterChange} />
      <ItemsList
        list={isFilter ? filteredItems : items}
        handleClick={handleListClick}
      />
      <ListItemDetails
        targetItem={detailItem}
        handleDelete={handleDelete}
      />
      <AddItem />
    </>
  );
};
