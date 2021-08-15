import React from "react";
import StyleButton from "./StyleButton";
import { AiOutlineOrderedList, AiOutlineUnorderedList } from "react-icons/ai";
import { BsCode } from "react-icons/bs";

const getBlockStyle = (block) => {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
};

const BLOCK_TYPES = [
  { label: "H1", style: "header-one" },
  { label: "H2", style: "header-two" },
  { label: "H3", style: "header-three" },
  { label: "H4", style: "header-four" },
];

const BLOCK_TYPES2 = [
  { label: <AiOutlineUnorderedList />, style: "unordered-list-item" },
  { label: <AiOutlineOrderedList />, style: "ordered-list-item" },
  { label: <BsCode />, style: "code-block" },
];

const BlockStyleControls = (props) => {
  const { editorState, onToggle } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div>
      <div className="RichEditor-controls">
        {BLOCK_TYPES.map((type, index) => (
          <StyleButton
            key={index}
            active={type.style === blockType}
            onToggle={onToggle}
            label={<span className="fa-fw">{type.label}</span>}
            style={type.style}
          />
        ))}
      </div>
      <div className="RichEditor-controls">
        {BLOCK_TYPES2.map((type, index) => (
          <StyleButton
            key={index}
            active={type.style === blockType}
            onToggle={onToggle}
            label={<span>{type.label}</span>}
            style={type.style}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockStyleControls;
export { StyleButton, getBlockStyle };
