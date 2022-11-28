import React, { useState } from "react";

const NoteEntry = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = () => {
    if (text.trim().length > 0) {
      onAdd(text);
    }
    setText("");
  };

  return (
    <>
      <div id="notecard">
        <div id="content">
          <input
            id="textarea"
            multiple={true}
            type="text"
            placeholder="Add Note"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div id="actions">
          <p id="characters">characters: {text?.trim().length}</p>
          <button id="save" onClick={() => onSubmit(text)}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default NoteEntry;
