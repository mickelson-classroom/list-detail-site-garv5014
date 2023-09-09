import { useEffect, useState } from "react";
import { ListItemDetails } from "./ListItemDetails";
import { FilterList } from "./FilterList";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";
import IListItem from "../interfaces/IListItem";
import { AddItemModal } from "./AddItemModal";

export const MasterList = () => {
  const genericItem = {
    name: "",
    details: "",
    estHrs: 0,
    dateCreated: "",
    dateDue: "",
    isUrgent: false,
    owners: [],
  };

  const i = [
    {
      id: crypto.randomUUID(),
      name: "Item 1",
      details: "an example Item",
      estHrs: 0,
      dateCreated: "",
      dateDue: "",
      isUrgent: false,
      owners: ["owner 1", "owner 2"],
    },
    {
      id: crypto.randomUUID(),
      name: "Item 2",
      details: "This is an example Item",
      estHrs: 0,
      dateCreated: "",
      dateDue: "",
      isUrgent: false,
      owners: ["owner 1", "owner 2"],
    },
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
    setDetailItem({
      id: crypto.randomUUID(),
      ...genericItem,
    });
  };

  const handleDelete = () => {
    let newList = items.filter((item) => {
      return item.id !== detailItem?.id;
    });
    setItems(newList);
    setDetailItem({
      id: crypto.randomUUID(),
      ...genericItem,
    });
  };

  const handleAddItem = (item: IListItem) => {
    if (item?.name) {
      setItems([...items, { ...item, id: crypto.randomUUID() }]);
      console.log(items);
    } else {
      alert("Please enter a name for the item");
    }
  };

  const handleAddOwner = (owner: string) => {
    if (owner) {
      const item = {
        id: detailItem.id,
        name: detailItem.name,
        details: detailItem.details,
        estHrs: detailItem.estHrs,
        dateCreated: detailItem.dateCreated,
        dateDue: detailItem.dateDue,
        isUrgent: detailItem.isUrgent,
        owners: [...detailItem.owners, owner],
      };
      setItems([
        ...items.filter((item) => {
          return item.id !== detailItem?.id;
        }),
        item,
      ]);
      setDetailItem(item);
    } else {
      alert("Please enter a name for the owner");
    }
  };

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => {
        return item.name.toLowerCase().includes(filterStr.toLowerCase());
      })
    );
  }, [items, filterStr]);

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
            handleAddOwner={handleAddOwner}
          />
        </div>

        <div className="col-lg-5 col-xl-4 col-md-4 col-sm-6 mx-auto col-6">
          <AddItemModal handleAdd={handleAddItem} />
        </div>
      </div>
    </div>
  );
};
