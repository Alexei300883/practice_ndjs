import React from "react";
import Star from "./Star";
import "./Stars.css"

type StarsType = {
  count: number;
};
const Stars = (props: StarsType) => {
  const { count } = props;

  return (
    <>
      {count > 5 || count < 1 ? null : (
        <ul className="card-body-stars">
          {Array(count)
            .fill("")
            .map((_, ind) => (
              <li key={ind}>
                <Star />
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

export default Stars;
