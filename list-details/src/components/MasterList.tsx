import { useEffect, useState } from "react";
import { ListItemDetails } from "./ListItemDetails";
import { FilterList } from "./FilterList";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";
import IListItem from "../interfaces/IListItem";
import { AddItemModal } from "./AddItemModal";

export const MasterList = () => {
  let i = [
    {
      id: 1,
      name: "Item 1",
      details: "an example Item",
      owners: ["owner 1", "owner 2"],
    },
    {
      id: 2,
      name: "Item 2",
      details: "This is an example Item",
      owners: ["owner 1", "owner 2"],
    },
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
    <div className="grid grid justify-content-center m-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-xl-4 col-md-8 col-sm-12 mx-auto">
          <FilterList handleOnChange={handleOnFilterChange} />
          <ItemsList list={filteredItems} handleClick={handleListClick} />
          <ListItemDetails
            targetItem={detailItem}
            owners={detailItem?.owners || []}
            handleDelete={handleDelete}
          />
        </div>

        <div className="col-lg-5 col-xl-4 col-md-4 col-sm-6 mx-auto col-6">
          <AddItemModal handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};
