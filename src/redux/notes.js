import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
let now = new Date();
const initialState = {
  notes: [
    {
      id: uuid(),
      text: "First Note",
      date: `${now.toDateString()} - ${now.getHours()}:${now.getMinutes()}`,
    },
  ],
  searchResults: [],
};

const setItem = (state) => {
  localStorage.setItem("notes", JSON.stringify(state.notes));
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    load: (state) => {
      let dbNotes = JSON.parse(localStorage.getItem("notes"));
      if (dbNotes) {
        state.notes = dbNotes;
      } else {
        setItem(state);
      }
      state.searchResults = state.notes;
    },
    save: (state, action) => {
      state.notes.push(action.payload);
      setItem(state);
      state.searchResults = state.notes;
    },
    remove: (state, action) => {
      state.notes = state.notes.filter((nt) => nt.id !== action.payload);
      state.searchResults = state.notes;
      setItem(state);
    },
    search: (state, action) => {
      state.searchResults = state.notes.filter((nt) =>
        nt.text.toLowerCase().includes(action.payload)
      );
    },
  },
});

export const { save, remove, load, search } = notesSlice.actions;

export default notesSlice.reducer;
