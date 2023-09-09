import { useEffect, useState } from "react";
import { ListItemDetails } from "./ListItemDetails";
import { FilterList } from "./FilterList";
import { ItemsList } from "./ItemsList";
import { AddItem } from "./AddItem";
import IListItem from "../interfaces/IListItem";
import { AddItemModal } from "./AddItemModal";

export const MasterList = () => {
  const genericItem = {
    Name: "",
    Details: "",
    "Est Hrs": 0,
    "Date Created": "",
    "Due Date": "",
    isUrgent: false,
    owners: [],
  };

  const i = [
    {
      id: crypto.randomUUID(),
      Name: "Item 1",
      Details: "an example Item",
      "Est Hrs": 0,
      "Date Created": new Date(Date.now()).toDateString(),
      "Due Date": new Date(Date.now()).toDateString(),
      isUrgent: false,
      owners: ["owner 1", "owner 2"],
    },
    {
      id: crypto.randomUUID(),
      Name: "Item 2",
      Details: "This is an example Item",
      "Est Hrs": 0,
      "Date Created": "",
      "Due Date": "",
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
    if (item?.Name) {
      setItems([...items, { ...item, id: crypto.randomUUID() }]);
    }
  };

  const handleAddOwner = (owner: string) => {
    if (owner) {
      const item = {
        id: detailItem.id,
        Name: detailItem.Name,
        Details: detailItem.Details,
        "Est Hrs": detailItem?.["Est Hrs"],
        "Date Created": detailItem?.["Date Created"],
        "Due Date": detailItem?.["Due Date"],
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
        return item.Name.toLowerCase().includes(filterStr.toLowerCase());
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
