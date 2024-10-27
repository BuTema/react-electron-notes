const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  getNotes: () => ipcRenderer.invoke("get-notes"),
  saveNotes: (notes) => ipcRenderer.invoke("save-notes", notes),
});
