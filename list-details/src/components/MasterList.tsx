import React, { useEffect, useState } from "react";
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

  const [items, setItems] = useState<IListItem[]>(i);
  const [filteredItems, setFilteredItems] = useState<IListItem[]>(i);
  const [detailItem, setDetailItem] = useState<IListItem>(i[0]);
  const [filterStr, setFilterStr] = useState<string>("");

  const handleListClick = (item: IListItem) => {
    setDetailItem(item);
  };

  const handleOnFilterChange = (targteStr: string) => {
    setFilterStr(targteStr);
    setDetailItem(filteredItems[0]);
  };

  useEffect(() => {
      setFilteredItems(
        items.filter((item) => {
          return item.details.toLowerCase().includes(filterStr.toLowerCase());
        })
      );
  }, [items, filterStr]);

  const handleDelete = () => {
    let newList = items.filter((item) => {
      return item.id !== detailItem.id;
    });
    setItems(newList);
    setDetailItem(newList[0]);
  };

  const handleAdd = (item: IListItem) => {
    setItems([...items, { ...item, id: items.length + 1 }]);
  };
  if (items.length === 0) {
    return (
      <>
        <FilterList handleOnChange={handleOnFilterChange} />
        <AddItem handleAdd={handleAdd} />
        <p>No Items left</p>
      </>
    );
  }

  return (
    <>
      <FilterList handleOnChange={handleOnFilterChange} />
      <ItemsList list={filteredItems} handleClick={handleListClick} />
      <ListItemDetails targetItem={detailItem} handleDelete={handleDelete} />
      <AddItem handleAdd={handleAdd} />
    </>
  );
};
