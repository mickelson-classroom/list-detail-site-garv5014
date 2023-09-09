import React, { FC, useEffect, useState } from "react";

export const FilterList: FC<{
  handleOnChange: (targetstr: string) => void;
}> = ({ handleOnChange }) => {
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    handleOnChange(filterString);
  }, [filterString]);

  return (
    <>
      <label htmlFor="filter" className="form-label h4 mt-2 mx-2 ">
        Filter:
      </label>
      <input
        id="filter"
        value={filterString}
        onChange={(e) => {
          setFilterString(e.target.value);
        }}
        placeholder="Filter"
      />
    </>
  );
};
