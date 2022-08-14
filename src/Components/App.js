import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import InputNote from "../InputNote";
import { getInitialData } from "../utils/data";
import Notelist from "./Notelist";
import SearchBar from "./SearchBar";

export default function App() {
  const { search } = window.location;
  const input = new URLSearchParams(search).get("s");
  const [notes, setNotes] = useState(getInitialData());
  const [query, setQuery] = useState(input || "");

  const onAddHandler = (title, body) => {
    const newNote = {
      id: +new Date(),
      title: title,
      body: body,
      createdAt: +new Date(),
      archived: false,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const onDeleteHandler = (id) => {
    const deleteNotes = notes.filter((note) => note.id !== id);
    setNotes(deleteNotes);
  };

  const onUpdateHandler = (id, newStatus) => {
    const allNotes = notes.map((note) => {
      if (note.id === id) {
        note.archived = !newStatus;
      }
      return note;
    });
    setNotes(allNotes);
  };

  const filteredNotes = !query
    ? notes
    : notes.filter((note) =>
        note.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      );

  const activeList = filteredNotes.filter((note) => {
    return note.archived === false;
  });

  const archivedList = filteredNotes.filter((note) => {
    return note.archived === true;
  });

  return (
    <Router>
      <SearchBar query={query} setQuery={setQuery} />
      <InputNote addNoteHandler={onAddHandler} />
      <Notelist
        notesName="Catatan Aktif"
        notes={activeList}
        onDelete={onDeleteHandler}
        onUpdateStatus={onUpdateHandler}
        buttonName="Arsipkan"
      />
      <Notelist
        notesName="Arsip"
        notes={archivedList}
        onDelete={onDeleteHandler}
        onUpdateStatus={onUpdateHandler}
        buttonName="Pindahkan"
      />
    </Router>
  );
}
