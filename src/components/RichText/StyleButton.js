import React, { useEffect, useState } from "react";

const StyleButton = ({ style, active, label, onToggle }) => {
  const [className, setClassName] = useState("RichEditor-styleButton");

  function handleClick(e) {
    e.preventDefault();
    onToggle(style);
  }

  useEffect(() => {
    if (active) {
      setClassName("RichEditor-styleButton RichEditor-activeButton");
    } else {
      setClassName("RichEditor-styleButton");
    }
  }, [active]);

  return (
    <span className={className} onMouseDown={handleClick}>
      {label}
    </span>
  );
};

export default StyleButton;
