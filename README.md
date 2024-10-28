# Electron Notes App

A simple desktop note-taking application built with Electron, React, and TypeScript. Users can create, edit, delete, and save notes, which are stored locally in a JSON file. The application also uses Tailwind CSS for styling and Vitest for unit testing.

## Features

Create, edit, and delete notes with a simple interface
Persistent storage: Notes are stored in a local JSON file for persistence
Rich text editing using TipTap
Modern styling with Tailwind CSS
TypeScript support for type safety and maintainability
Technologies Used

- Electron for the desktop application framework
- React as the UI library
- TypeScript for type safety
- Tailwind CSS for styling
- TipTap as the rich text editor
- Vitest and React Testing Library for unit testing

## Getting Started

Ensure you have Node.js and npm installed on your machine. You can download them from nodejs.org.

## Installation

Clone the repository:

```bash
git clone https://github.com/BuTema/react-electron-notes.git
cd react-electron-notes
```

Install the dependencies:

```bash
npm install
```

Build Process

Note: You need to build the React application before running Electron.

Build the React app:

```bash
npm run build
```

This command uses Webpack to compile the React code and outputs the bundled file to the dist/ folder.

Start the Electron app:

```bash
npm run start
```

This command launches the Electron application, loading the compiled React app.

## Usage

Add a Note: Click on "Create New Note" to add a new note.
Edit a Note: Enter text in the title and content area.
Delete a Note: Click the "Delete Note" button to remove a note permanently.
Notes are saved automatically, and data is stored in a notes.json file in Electron’s userData directory, ensuring persistence across sessions.

## Available Scripts

Build the React app using Webpack.

```bash
npm run build
```

Start the Electron app (ensure you’ve built React first).

```bash
npm run start
```

Run unit tests with Vitest and React Testing Library.

```bash
npm run test
```

## Testing

This app uses Vitest for testing the general logic and React Testing Library for testing UI components. Run tests with

```bash
npm run test
```
