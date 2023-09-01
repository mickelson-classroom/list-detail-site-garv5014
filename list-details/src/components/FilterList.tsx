import React, { FC, useEffect, useState } from "react";

export const FilterList: FC<{
  handleOnChange: (targetstr: string) => void;
}> = ({ handleOnChange }) => {
  const [filterString, setFilterString] = useState("");

  useEffect(() => { 
    handleOnChange(filterString);
  }, [filterString]);

  // Declare a state variable...
  // ...
  return (
    <input
      value={filterString} // ...force the input's value to match the state variable...
      onChange={(e) => {
        setFilterString(e.target.value);
      }}
      placeholder="Word to filter" // ... and update the state variable on any edits!
    />
  );
};
