import React, { FC } from "react";
import { AddItem } from "./AddItem";
import IListItem from "../interfaces/IListItem";
import AddIcon from '@mui/icons-material/Add';

export const AddItemModal: FC<{ handleAdd: (item: IListItem) => void }> = ({
  handleAdd,
}) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target=".modal"
      >
        <AddIcon/>
      </button>
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Item</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <AddItem handleAdd={handleAdd} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
