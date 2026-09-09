import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

    // Get all notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE3Njk0OTE5YzQ3ODNlYzU3N2FlM2VlIn0sImlhdCI6MTc4NjI0MzQ3M30.u9vvSWpqtLoGyn8vTOvCNnWQfws02_jrUc14jNgmGgg",
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE3Njk0OTE5YzQ3ODNlYzU3N2FlM2VlIn0sImlhdCI6MTc4NjI0MzQ3M30.u9vvSWpqtLoGyn8vTOvCNnWQfws02_jrUc14jNgmGgg",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    console.log(json);

    const note = {
      _id: "6a7a84a3b949e58b138f57e94",
      user: "6a7694919c4783ec577ae3ee",
      title: title,
      description: description,
      tag: tag,
      date: "2026-08-11T02:10:43.313Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = async(id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE3Njk0OTE5YzQ3ODNlYzU3N2FlM2VlIn0sImlhdCI6MTc4NjI0MzQ3M30.u9vvSWpqtLoGyn8vTOvCNnWQfws02_jrUc14jNgmGgg",
      },
    });
    const json = response.json();
    console.log(json);
    
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmE3Njk0OTE5YzQ3ODNlYzU3N2FlM2VlIn0sImlhdCI6MTc4NjI0MzQ3M30.u9vvSWpqtLoGyn8vTOvCNnWQfws02_jrUc14jNgmGgg",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes}}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
