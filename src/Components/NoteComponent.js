import React from "react";

const NoteComponent = ({ text, date, onDelete, id }) => {
  return (
    <div id="notecard">
      <div id="content">
        <span id="text">{text}</span>
      </div>
      <div id="actions">
        <p id="date">{date}</p>
        <button id="delete" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteComponent;
