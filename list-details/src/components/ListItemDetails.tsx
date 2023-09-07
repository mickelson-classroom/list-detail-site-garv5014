import { FC } from "react";
import IListItem from "../interfaces/IListItem";

export const ListItemDetails: FC<{
  targetItem: IListItem | undefined;
  handleDelete: () => void;
}> = ({ targetItem, handleDelete }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {targetItem?.details && <p className=" h3 mt-4 mb-4">{targetItem?.details}</p>}
        <button className="btn btn-danger mt-4 mb-4"
          onClick={() => {
            handleDelete();
          }}
          disabled={!targetItem?.id}
        >
          Delete
        </button>
      </div>
    </div>
    // takes in the list and and index and displays the details of the item at that index
    // there is a button that will delete the item at that index
  );
};
