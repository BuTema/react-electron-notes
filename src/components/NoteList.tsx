import React from "react";
import Note from "./Note";
import { Note as NoteType } from "../types/types";

interface NoteListProps {
  notes: NoteType[];
  deleteNote: (id: number) => void;
  updateNote: (id: number, updatedNote: NoteType) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
  deleteNote,
  updateNote,
}) => {
  return (
    <div>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
