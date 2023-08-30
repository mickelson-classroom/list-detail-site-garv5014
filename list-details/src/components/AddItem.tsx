import { useState } from "react";
import IListItem from "../interfaces/IListItem";

export const AddItem = (props: { handleAdd: (item: IListItem) => void }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleAdd(itemInfo);
  };

  const handleChange = (value: string ,name: string) => {
    setItemInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    }); 
  };

  const [itemInfo, setItemInfo] = useState<IListItem>({
    id: 0,
    name: "",
    details: "",
  });
  return (
    <>
      <h2>Add new Item</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Item Name"></label>
        <input
          type="text"
          name="itemName"
          value={itemInfo?.name}
          placeholder="Name"
          onChange={(e) => handleChange(e.target.value, "name")}
        />
        <label htmlFor="Item Details"></label>
        <input
          type="text"
          name="itemDetails"
          value={itemInfo?.details}
          placeholder="Details"
          onChange={(e) => handleChange(e.target.value, "details")}
        />
        <button type="submit">
          Add
        </button>
      </form>
    </>
  );
};
