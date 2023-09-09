import { useState, FC } from "react";
import IListItem from "../interfaces/IListItem";

export const AddItem: FC<{ handleAdd: (item: IListItem) => void }> = ({
  handleAdd,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAdd(itemInfo);
  };

  const handleChange = (value: string | boolean, name: string) => {
    console.log("here is the value", value);
    setItemInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const [itemInfo, setItemInfo] = useState<IListItem>({
    id: crypto.randomUUID(),
    name: "",
    details: "",
    owners: [],
    estHrs: 0,
    dateCreated: "",
    dateDue: "",
    isUrgent: false,
  });
  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Item Name" className="form-label h4 mt-2">
          Name
        </label>
        <input
          type="text"
          name="itemName"
          className="form-control"
          value={itemInfo?.name}
          placeholder="Name"
          onChange={(e) => handleChange(e.target.value, "name")}
          required
        />

        <label htmlFor="Item Details" className="form-label h4 mt-2">
          Details
        </label>
        <input
          type="text"
          name="itemDetails"
          className="form-control mb-4"
          value={itemInfo?.details}
          placeholder="Details"
          onChange={(e) => handleChange(e.target.value, "details")}
          required
        />

        <label htmlFor="estHrs" className="form-label h4 mt-2">
          Estimated Hours:
        </label>
        <input
          type="number"
          name="estHrs"
          className="form-control mb-4"
          value={itemInfo?.estHrs}
          placeholder="Estimated Hours"
          onChange={(e) => handleChange(e.target.value, "estHrs")}
          required
        />

        <label htmlFor="dateCreated" className="form-label h4 mt-2">
          Date Created:
        </label>
        <input
          type="date"
          name="dateCreated"
          className="form-control mb-4"
          value={itemInfo?.dateCreated}
          placeholder="Date Created"
          onChange={(e) => handleChange(e.target.value, "dateCreated")}
        />

        <label htmlFor="dateDue" className="form-label h4 mt-2">
          Date Due:
        </label>
        <input
          type="date"
          name="dateDue"
          className="form-control mb-4"
          value={itemInfo?.dateDue}
          placeholder="Date Due"
          onChange={(e) => handleChange(e.target.value, "dateDue")}
          required
        />
        <div className="form-check form-switch">
          <label htmlFor="isUrgent" className="form-label h4 my-2">
            Urgent
          </label>
          <input
            type="checkbox"
            name="isUrgent"
            role="switch"
            className="form-check-input mt-3"
            onChange={(e) => handleChange(e.target.checked, "isUrgent")}
          />
        </div>

        <button type="submit" className="btn btn-primary ">
          Add
        </button>
      </form>
    </div>
  );
};
