import { useEffect, useState } from "react";
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
  const [detailItem, setDetailItem] = useState<IListItem | undefined>(i[0]);
  const [filterStr, setFilterStr] = useState<string>("");

  const handleListClick = (item: IListItem) => {
    setDetailItem(item);
  };

  const handleOnFilterChange = (targteStr: string) => {
    setFilterStr(targteStr);
    setDetailItem(undefined);
  };

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => {
        return item.name.toLowerCase().includes(filterStr.toLowerCase());
      })
    );
  }, [items, filterStr]);

  const handleDelete = () => {
    let newList = items.filter((item) => {
      return item.id !== detailItem?.id;
    });
    setItems(newList);
    setDetailItem(undefined);
  };

  const handleAdd = (item: IListItem) => {
    setItems([...items, { ...item, id: items.length + 1 }]);
  };

  return (
    <div className="d-flex flex-column justify-content-center">
        <FilterList handleOnChange={handleOnFilterChange} />
      <ItemsList list={filteredItems} handleClick={handleListClick} />
      <ListItemDetails targetItem={detailItem} handleDelete={handleDelete} />
      <AddItem handleAdd={handleAdd} />
    </div>
  );
};
