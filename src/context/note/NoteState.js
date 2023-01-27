import NoteContext from "./noteContext";
import React, {useState} from "react";

const NoteState = (props) => {
    let notesInitial = [
         {
              _id: "63d347161b63ff347a0d72bd",
              user: "63bd5c2997b1be3e06f9c35c",
              title: "This is my first ever note",
              description: "This is a description for my first note",
              tag: "first, note",
              date: "1674790678726",
              __v: 0,
         },
    ];

    const [notes, setNotes] = useState(notesInitial);
     
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 