/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import SearchComponent from "./Components/SearchComponent";
import NotesContainer from "./Components/NotesContainer";
import { useSelector, useDispatch } from "react-redux";
import { load, remove, save } from "./redux/notes";

function App() {
  const { searchResults } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load());
  }, []);

  const addNote = (text) => {
    const id = uuid();
    let now = new Date();
    const date = `${now.toDateString()} - ${now.getHours()}:${now.getMinutes()}`;
    const newNote = { id, text, date };
    dispatch(save(newNote));
  };

  const deleteNote = (id) => {
    dispatch(remove(id));
  };

  return (
    <div id="main">
      <SearchComponent></SearchComponent>
      <NotesContainer
        notes={searchResults}
        onAdd={addNote}
        onDelete={deleteNote}
      ></NotesContainer>
    </div>
  );
}

export default App;
