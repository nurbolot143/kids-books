import React from "react";

function Container(props) {
  const { className } = props;

  return (
    <div className={`container ${className ? className : ""}`}>
      {props.children}
    </div>
  );
}

export default Container;
