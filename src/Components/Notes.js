import React, { useContext } from "react";
import NoteContext from "../context/note/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

export default function Notes() {
     const context = useContext(NoteContext);
     const {notes} = context;
     return (
          <>
               <AddNote/>
               <section className="container my-3">
                    <h2>Your notes</h2>
                    {notes.map((note) => {
                         return (
                              <NoteItem
                                   note={note}
                                   key={note._id}
                              />
                         );
                    })}
               </section>
          </>
     );
}
