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
  border: 1px solid var(--color-logo-dark-a-2);
  background-color: white;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
  color: var(--color-logo-dark);
  font-family: var(--font);

  .RichEditor-editor {
    cursor: text;
    color: var(--color-logo-dark);
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0rem 1rem;
  }

  .RichEditor-editor .public-DraftEditorPlaceholder-root,
  .RichEditor-editor .public-DraftEditor-content {
    margin: 0 -15px -15px;
    padding: 1rem 1rem;
    color: var(--color-logo-dark-a);
    font-size: 1.2rem;
  }

  .RichEditor-editor .public-DraftEditor-content {
    min-height: 12rem;
    font-size: 1.1rem;
    color: var(--color-logo-dark);
  }

  .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {
    display: none;
  }

  .RichEditor-editor .public-DraftStyleDefault-pre {
    background-color: rgba(226, 237, 253, 0.4);
    font-family: "Inconsolata", "Menlo", "Consolas", monospace;
    font-size: 1rem;
    padding: 15px;
  }

  .RichEditor-controls {
    display: flex;
    align-items: center;
    font-family: var(--font-asap);
    font-size: 1.3rem;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.02);
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-left: 0.5rem;
    padding-right: 0.3rem;
  }

  .RichEditor-styleButton {
    min-height: 1rem;
    span {
      padding: 0;
      margin: 0;
      display: grid;
      padding: 8px;
      place-items: center;
    }
    border-radius: 50%;
    cursor: pointer;
    margin-right: 0.4rem;
    color: var(--color-logo-dark-a);
    display: inline-block;
    font-weight: 500;
    font-family: var(--font);
    transition: var(--transition);
    .fa-fw {
      padding: 4px 7px;
    }
    :hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .RichEditor-activeButton {
    color: var(--color-logo-dark);
    background-color: var(--color-logo);
  }

  @media screen and (min-width: 992px) {
    .RichEditor-controls {
      font-size: 1.4rem;
    }

    .RichEditor-styleButton {
      span {
        padding: 10px;
      }
      .fa-fw {
        padding: 6px 9px;
      }
    }

    .RichEditor-editor .public-DraftEditor-content {
      font-size: 1.25rem;
    }

    .RichEditor-editor .public-DraftEditor-content {
      min-height: 11rem;
      font-size: 1.2rem;
    }
  }
`;

export default DraftJS;
