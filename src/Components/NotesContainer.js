import React from "react";
import NoteComponent from "./NoteComponent";
import NoteEntry from "./NoteEntry";

const NotesContainer = ({ onAdd, onDelete, notes }) => {
  const notesArray = [<NoteEntry key="0" onAdd={onAdd}></NoteEntry>];
  notes.forEach((nt) => {
    notesArray.push(
      <NoteComponent
        key={nt.id}
        id={nt.id}
        text={nt.text}
        date={nt.date}
        onDelete={onDelete}
      ></NoteComponent>
    );
  });

  return (
    <div id="notescontainer">
      <ul id="notelist">{notesArray}</ul>
    </div>
  );
};

export default NotesContainer;
