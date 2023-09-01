import { FC } from "react";
import IListItem from "../interfaces/IListItem";

export const ListItemDetails: FC<{
  targetItem: IListItem | undefined;
  handleDelete: () => void;
}> = ({ targetItem, handleDelete }) => {
  return (
    <div>
      {targetItem?.details && <p>{targetItem?.details}</p>}
      <button
        onClick={() => {
          handleDelete();
        }}
        disabled={!targetItem?.id}
      >
        Delete
      </button>
    </div>
    // takes in the list and and index and displays the details of the item at that index
    // there is a button that will delete the item at that index
  );
};
