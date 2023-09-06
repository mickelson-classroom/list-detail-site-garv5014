import React, { FC, useEffect, useState } from "react";

export const FilterList: FC<{
  handleOnChange: (targetstr: string) => void;
}> = ({ handleOnChange }) => {
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    handleOnChange(filterString);
  }, [filterString]);

  return (
    <div className="container">
      <div className="row">
        <input
          value={filterString}
          onChange={(e) => {
            setFilterString(e.target.value);
          }}
          placeholder="Search"
        />
      </div>
    </div>
  );
};
