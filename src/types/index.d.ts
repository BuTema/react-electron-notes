export {};

declare global {
  interface Window {
    api: {
      getNotes: () => Promise<Note[]>;
      saveNotes: (notes: Note[]) => void;
    };
  }
}
