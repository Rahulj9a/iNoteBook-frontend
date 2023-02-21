import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
     let notesInitial = [
          {
               '_id': "63d347161b63ff347a0d72bd",
               'user': "63bd5c2997b1be3e06f9c35c",
               'title': "This is my first ever note",
               'description': "This is a description for my first note [Added]",
               'tag': "first, note",
               'date': "1674790678726",
               '__v': 0,
          },
     ];

     const [notes, setNotes] = useState(notesInitial);

     //Add a note:-
     const addNote = ({title, description, tag}) => {
          console.log(title);
          console.log(description);
          const note = {
               '_id': "63d347161b63ff347a0d72be",
               'user': "63bd5c2997b1be3e06f9c35r",
               'title': title,
               'description': description,
               'tag': tag,
               'date': "1674790678726",
               '__v': 0,
          }
          setNotes(notes.concat(note));
     };
     //Delete a note:-
     const deleteNote = (id) => {
          const newNotes = notes.filter(note => { return note._id !== id })
          setNotes(newNotes)
     };

     //Edit a note:-
     //API call:
     


     //Logic to edit on clientside
     const editNote = (id, title, description, tag) => {
          for (let index = 0; index < notes.length; index++) {
               const element = notes[index];
               if (element._id === id) {
                    element.title = title;
                    element.description = description;
                    element.tag = tag;
               }
          }
          
     };

     return (
          <NoteContext.Provider
               value={{ notes, setNotes, addNote, deleteNote, editNote }}
          >
               {props.children}
          </NoteContext.Provider>
     );
};

export default NoteState;
