import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
     const host = "http://localhost:5000";
     let notesInitial = [];

     const [notes, setNotes] = useState(notesInitial);

     //Add a note:-
     const addNote = async ({ title, description, tag }) => {
          //API CALL:
          try {
               const response = await fetch(
                    `http://localhost:5000/api/notes/addnote`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                              "auth-token": localStorage.getItem("token"),
                         },
                         body: JSON.stringify({ title, description, tag }),
                    },
               );
               let json = await response.json();
               if (response.status === 200) {
                    setNotes(notes.concat(json));
               }
          } catch (error) {
               console.log(error);
          }
     };
     //Get all note:-
     const getNotes = async () => {
          //API CALL:
          try {
               const response = await fetch(
                    `http://localhost:5000/api/notes/fetchallnotes`,
                    {
                         method: "GET",
                         headers: {
                              "Content-Type": "application/json",
                              "auth-token": localStorage.getItem("token"),
                         },
                    },
               );
               const json = await response.json();
               //Server side

               setNotes(json);
          } catch (error) {
               console.error(error);
          }
     };
     //Delete a note:-
     const deleteNote = async (id) => {
          //api call:
          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
               method: "DELETE",
               headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token"),
               },
          });
          const json = await response.json();
          console.log(json)
          //Servre side:
          const newNotes = notes.filter((note) => {
               return note._id !== id;
          });
          setNotes(newNotes);
     };

     //Edit a note:-

     const editNote = async (id, title, description, tag) => {
          //API call:

          try {
               const response = await fetch(
                    `${host}/api/notes/updatenote/${id}`,
                    {
                         method: "PUT",
                         headers: {
                              "Content-Type": "application/json",
                              "auth-token": localStorage.getItem("token"),
                         },
                         body: JSON.stringify({ title, description, tag }),
                    },
               );
               const json = response.json();
               console.log(json)
               let newNotes = JSON.parse(JSON.stringify(notes));
               //Logic to edit on clientside
               for (let index = 0; index < newNotes.length; index++) {
                    const element = newNotes[index];
                    if (element._id === id) {
                         element.title = title;
                         element.description = description;
                         element.tag = tag;
                    }
                    break;
               }
               setNotes(newNotes);
          } catch (error) {
               console.log(error);
          }
     };

     return (
          <NoteContext.Provider
               value={{
                    notes,
                    setNotes,
                    getNotes,
                    addNote,
                    deleteNote,
                    editNote,
               }}
          >
               {props.children}
          </NoteContext.Provider>
     );
};

export default NoteState;
