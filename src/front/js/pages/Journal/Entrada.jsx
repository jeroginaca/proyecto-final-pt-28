import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../styles/entrada.css";

export default function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div className="full-screen-editor">
      <div className="editor-textarea">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      <button
        className="save-button btn btn-primary border-0"
        onClick={() => {
          console.log(note);
        }}
      >
        Guardar
      </button>
    </div>
  );
}
