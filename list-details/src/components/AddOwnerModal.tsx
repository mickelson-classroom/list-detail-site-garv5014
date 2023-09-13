import { DisabledByDefault } from "@mui/icons-material";
import React, { FC, useState } from "react";

export const AddOwnerModal: FC<{
  handleAddOwner: (owner: string) => void;
  disable: boolean;
}> = ({ handleAddOwner, disable }) => {
  const handleChange = (value: string) => {
    setOwnerName(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddOwner(ownerName);
  };
  const [ownerName, setOwnerName] = useState<string>("");

  return (
    <>
      <button
        type="button"
        className="mt-4 mb-4 col btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addOwnerModal"
        disabled={disable}
      >
        Add Owner
      </button>
      <div
        className="modal fade"
        id="addOwnerModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Owner
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="ownerName" className="form-label h4 mt-2">
                  Owner Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ownerName"
                  placeholder="Owner Name"
                  onChange={(e) => handleChange(e.target.value)}
                />
                <button type="submit" className="btn btn-primary mt-4">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
