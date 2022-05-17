import React from "react";

export const Grid = (props) => {
  return (<div className="container">
  <div className="flex row-wrap">
    {props.children}
  </div>
</div>)
}
