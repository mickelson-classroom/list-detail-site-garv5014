import { useState, FC } from "react";
import IListItem from "../interfaces/IListItem";

export const AddItem: FC<{ handleAdd: (item: IListItem) => void }> = ({
  handleAdd,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd(itemInfo);
  };

  const handleChange = (value: string, name: string) => {
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
    <div className="row mx-auto">
      <h2>Add new Item</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Item Name"></label>
        <input
          type="text"
          name="itemName"
          className="form-control"
          value={itemInfo?.name}
          placeholder="Name"
          onChange={(e) => handleChange(e.target.value, "name")}
        />
        <label htmlFor="Item Details"></label>
        <input
          type="text"
          name="itemDetails"
          className="form-control mb-4"
          value={itemInfo?.details}
          placeholder="Details"
          onChange={(e) => handleChange(e.target.value, "details")}
        />
        <button type="submit" className="btn btn-primary ">
          Add
        </button>
      </form>
    </div>
  );
};
