import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import { Note } from "./types/types";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    window.api.getNotes().then((loadedNotes: Note[]) => {
      setNotes(loadedNotes);
    });
  }, []);

  const addNote = () => {
    const newNote: Note = { title: "", content: "", id: Date.now() };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    window.api.saveNotes(updatedNotes);
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    window.api.saveNotes(updatedNotes);
  };

  const updateNote = (id: number, updatedNote: Note) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? updatedNote : note
    );
    setNotes(updatedNotes);
    window.api.saveNotes(updatedNotes);
  };

  return (
    <div className="p-4 bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        Electron Notes App
      </h1>
      <div className="flex justify-center my-4">
        <button
          onClick={addNote}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create New Note
        </button>
      </div>
      <NoteList notes={notes} deleteNote={deleteNote} updateNote={updateNote} />
    </div>
  );
};

export default App;
