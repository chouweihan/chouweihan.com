import React, { useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  ContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import styled from "styled-components";
import BlockStyleControls from "./DraftButton";
import InlineStyleControls from "./InlineControls";
import { stateToHTML } from "draft-js-export-html";
import { useContactContext } from "../../context-reducers/contact-context";

const DraftJS = () => {
  const { setHTML, response } = useContactContext();
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  const editor = React.useRef(null);

  function focusEditor() {
    editor.current.focus();
  }

  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  }

  function mapKeyToEditorCommand(e) {
    //tab
    if (e.keyCode === 9) {
      const newEditorState = RichUtils.onTab(e, editorState, 3);
      if (newEditorState !== editorState) {
        setEditorState(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  }

  function toggleBlockType(blockType) {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  }

  function toggleInlineStyle(inlineStyle) {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }

  useEffect(() => {
    setHTML(stateToHTML(editorState.getCurrentContent()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState]);

  let editorClassName = "RichEditor-editor";
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      editorClassName += " RichEditor-hidePlaceholder";
    }
  }

  useEffect(() => {
    const newEditorState = EditorState.push(
      editorState,
      ContentState.createFromText("")
    );
    setEditorState(newEditorState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return (
    <DraftWrapper>
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div className={editorClassName} onClick={focusEditor}>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          placeholder="Your Message for Me!"
          spellCheck={true}
        />
      </div>
    </DraftWrapper>
  );
};

// styled components
const DraftWrapper = styled.div`
  background: var(--color-logo-dark);
  border-bottom: 2px solid var(--color-gold);
  border-right: 2px solid var(--color-gold);
  border-left: 2px solid var(--color-gold);
  font-size: 1.5rem;
  width: 100%;
  font-family: var(--font);

  .RichEditor-editor {
    border-top: 2px solid var(--color-gold);
    cursor: text;
    font-size: 1.5rem;
    margin-top: 0.8rem;
    padding: 1rem 1rem;
  }

  .RichEditor-editor .public-DraftEditorPlaceholder-root,
  .RichEditor-editor .public-DraftEditor-content {
    margin: 0 -15px -15px;
    padding: 1rem 1rem;
    color: var(--color-gold);
    font-size: 1.5rem;
  }

  .RichEditor-editor .public-DraftEditor-content {
    min-height: 5rem;
    font-size: 1.5rem;
    color: var(--color-background);
  }

  .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {
    display: none;
  }

  .RichEditor-editor .RichEditor-blockquote {
    border-left: 5px solid #eee;
    color: #666;
    background-color: white;
    font-family: "Hoefler Text", "Georgia", serif;
    font-style: italic;
    margin: 16px 0;
    padding: 10px 20px;
  }

  .RichEditor-editor .public-DraftStyleDefault-pre {
    background-color: rgba(226, 237, 253, 0.2);
    font-family: "Inconsolata", "Menlo", "Consolas", monospace;
    font-size: 1.5rem;
    padding: 20px;
  }

  .RichEditor-controls {
    font-family: "Helvetica", sans-serif;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    user-select: none;
    padding: 0.2rem 1rem;
  }

  .RichEditor-styleButton {
    /* color: #999; */
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    color: var(--color-gold);
    display: inline-block;
    font-weight: 500;
    font-family: var(--font);
    transition: var(--transition);
    :hover {
      color: var(--color-background);
    }
  }

  .RichEditor-activeButton {
    color: var(--color-logo);
  }
`;

export default DraftJS;
