import React from "react";
import StyleButton from "./StyleButton";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsFonts,
} from "react-icons/bs";

var INLINE_STYLES = [
  { label: <BsTypeBold />, style: "BOLD" },
  { label: <BsTypeItalic />, style: "ITALIC" },
  { label: <BsTypeUnderline />, style: "UNDERLINE" },
  { label: <BsFonts />, style: "CODE" },
];

const InlineStyleControls = ({ onToggle, editorState }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type, index) => (
        <StyleButton
          key={index}
          active={currentStyle.has(type.style)}
          label={<span>{type.label}</span>}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default InlineStyleControls;
