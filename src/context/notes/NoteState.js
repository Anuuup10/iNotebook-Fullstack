import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
  {
    "_id": "6a7a84a3b949e58b138f57e9",
    "user": "6a7694919c4783ec577ae3ee",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-08-11T02:10:43.313Z",
    "__v": 0
  },
  {
    "_id": "6a7a84a3b949e58b138f57e91",
    "user": "6a7694919c4783ec577ae3ee",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-08-11T02:10:43.313Z",
    "__v": 0
  },
  {
    "_id": "6a7a84a3b949e58b138f57e92",
    "user": "6a7694919c4783ec577ae3ee",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-08-11T02:10:43.313Z",
    "__v": 0
  },
  {
    "_id": "6a7a84a3b949e58b138f57e93",
    "user": "6a7694919c4783ec577ae3ee",
    "title": "My Title",
    "description": "Please wake up early",
    "tag": "personal",
    "date": "2026-08-11T02:10:43.313Z",
    "__v": 0
  }
]

const [notes, setNotes] = useState(notesInitial)

// Add a note
const addNote = (title, description, tag) => {
  // TODO: API Call
  const note = {
    "_id": "6a7a84a3b949e58b138f57e94",
    "user": "6a7694919c4783ec577ae3ee",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2026-08-11T02:10:43.313Z",
    "__v": 0
  }
  setNotes(notes.concat(note))
}

// Delete a note
const deleteNote = () => {

}

// Edit a note
const editNote = () => {

}

    return(
        <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState