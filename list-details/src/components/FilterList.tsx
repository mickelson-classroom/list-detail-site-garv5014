import React, { useState } from "react";

export const FilterList = (props: { handleOnChange: (targetstr:string) => void }) => {
  const [filterString, setFilterString] = useState("");

  // Declare a state variable...
  // ...
  return (
    <input
      value={filterString} // ...force the input's value to match the state variable...
      onChange={(e) => {
        setFilterString(e.target.value);
        props.handleOnChange(e.target.value);
      }}
      placeholder="Word to filter" // ... and update the state variable on any edits!
    />
  );
};
