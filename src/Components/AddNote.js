import React, { useContext, useState } from "react";
import NoteContext from "../context/note/noteContext";
export default function AddNote() {
     const [note, setNote] = useState({ title: "", description: "", tag: "" });
     const context = useContext(NoteContext);
     const { addNote } = context;
     const handleAddNote = (e) => {
          e.preventDefault();

          addNote(note);
          setNote({
               title: "",
               description: "",
               tag: "",
          });
     };
     const onChange = (e) => {
          setNote({
               ...note,
               [e.target.name]: e.target.value,
          });
     };
     return (
          <div>
               <section className="container my-3">
                    <h2>Add Note</h2>

                    <form>
                         <div className="mb-3">
                              <label
                                   htmlFor="title"
                                   className="form-label"
                              >
                                   Title
                              </label>
                              <input
                                   type="text"
                                   className="form-control"
                                   id="title"
                                   name="title"
                                   onChange={onChange}
                                   required
                                   value={note.title}
                              />
                         </div>
                         <div className="mb-3">
                              <label
                                   htmlFor="description"
                                   className="form-label"
                              >
                                   Description
                              </label>
                              <input
                                   type="text"
                                   className="form-control"
                                   id="description"
                                   name="description"
                                   onChange={onChange}
                                   required
                                   value={note.description}
                              />
                         </div>
                         <div className="mb-3">
                              <label
                                   htmlFor="tag"
                                   className="form-label"
                              >
                                   Tags
                              </label>
                              <input
                                   type="text"
                                   className="form-control"
                                   id="tag"
                                   name="tag"
                                   onChange={onChange}
                                   value={note.tag}
                              />
                         </div>
                         <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleAddNote}
                              disabled={
                                   note.title.length < 5 ||
                                   note.description.length < 5
                              }
                         >
                              Add note
                         </button>
                    </form>
               </section>
          </div>
     );
}
