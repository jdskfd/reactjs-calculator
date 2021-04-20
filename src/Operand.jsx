import React, { useState, useEffect } from "react";

const clickHandle = (setInput, value) => {
  setInput((prev) => prev + value);
};

export default function Operand(props) {
  const { title, setInput } = props;
  return (
    <div
      className="Operand"
      onClick={() => {
        clickHandle(setInput, title);
      }}
    >
      {title}
    </div>
  );
}
