import { randomUUID } from "crypto";
import React, { FC } from "react";

export const OwnerCard: FC<{ owners: string[] }> = ({ owners }) => {
  return (
    <>
      <p className="h3">Task Owners</p>
      <div className="d-flex flex-wrap container justify-content-evenly">
        {owners.map((owner: string) => {
          return (
            <div className="card" key={crypto.randomUUID()}>
              <div className="card-body">
                <div>{owner}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
