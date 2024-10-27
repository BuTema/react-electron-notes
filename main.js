const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true, // Enables sandboxing
    },
  });

  win.loadFile("./build/index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// Path to store notes.json
const notesFilePath = "./notes.json";

// Helper function to read notes from notes.json
function readNotes() {
  if (fs.existsSync(notesFilePath)) {
    const data = fs.readFileSync(notesFilePath, "utf-8");
    return JSON.parse(data);
  }
  return [];
}

// Helper function to write notes to notes.json
function writeNotes(notes) {
  fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
}

// Listen for messages from renderer to get/save notes
ipcMain.handle("get-notes", () => readNotes());
ipcMain.handle("save-notes", (event, notes) => writeNotes(notes));
