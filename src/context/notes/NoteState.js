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
  }
]

const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState