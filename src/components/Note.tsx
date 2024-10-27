import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Note as NoteType } from "../types/types";

interface NoteProps {
  note: NoteType;
  deleteNote: (id: number) => void;
  updateNote: (id: number, updatedNote: NoteType) => void;
}

const Note: React.FC<NoteProps> = ({ note, deleteNote, updateNote }) => {
  const [title, setTitle] = useState<string>(note.title);

  const editor = useEditor({
    extensions: [StarterKit],
    content: note.content,
    onUpdate({ editor }) {
      const updatedNote = { ...note, content: editor.getHTML() };
      updateNote(note.id, updatedNote);
    },
  });

  useEffect(() => {
    const updatedNote = { ...note, title };
    updateNote(note.id, updatedNote);
  }, [title, note, updateNote]);

  return (
    <div className="p-4 bg-white shadow-md rounded my-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        className="w-full p-2 mb-2 border rounded"
      />
      <EditorContent editor={editor} className="mb-2 border p-2 rounded" />
      <button
        onClick={() => deleteNote(note.id)}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete Note
      </button>
    </div>
  );
};

export default Note;
