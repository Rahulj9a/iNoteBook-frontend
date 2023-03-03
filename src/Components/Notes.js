import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/note/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";

export default function Notes() {
     let navigate = useNavigate();
     const context = useContext(NoteContext);
     const { notes, getNotes, editNote } = context;
     const [note, setNote] = useState({
          id: "",
          etitle: "",
          edescription: "",
          etag: "",
     });
     useEffect(() => {
          if (localStorage.getItem("token")) {
               getNotes();
          } else {
               navigate("/signin");
          }
     }, []);
     const ref = useRef(null);
     const refClose = useRef(null);
     const updateNote = (currentNote) => {
          setNote({
               id: currentNote._id,
               etitle: currentNote.title,
               edescription: currentNote.description,
               etag: currentNote.tag,
          });
          ref.current.click();
     };
     const onChange = (e) => {
          setNote({
               ...note,
               [e.target.name]: e.target.value,
          });
     };
     const handleUpdate = (e) => {
          e.preventDefault();
          editNote(note.id, note.etitle, note.edescription, note.etag);
          refClose.current.click();
     };

     return (
          <>
               <AddNote />

               <button
                    type="button"
                    className="d-none btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    ref={ref}
               >
                    Launch demo modal
               </button>

               <div
                    className="modal "
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="false"
               >
                    <div
                         className="modal-dialog"
                         role="document"
                    >
                         <div className="modal-content">
                              <div className="modal-header">
                                   <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                   >
                                        Edit Note
                                   </h5>
                                   <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                   >
                                        <span aria-hidden="true">&times;</span>
                                   </button>
                              </div>
                              <div className="modal-body">
                                   <form>
                                        <div className="mb-3">
                                             <label
                                                  htmlFor="etitle"
                                                  className="form-label"
                                             >
                                                  Title
                                             </label>
                                             <input
                                                  type="text"
                                                  className="form-control"
                                                  id="etitle"
                                                  name="etitle"
                                                  onChange={onChange}
                                                  value={note.etitle}
                                                  required
                                                  minLength={5}
                                             />
                                        </div>
                                        <div className="mb-3">
                                             <label
                                                  htmlFor="edescription"
                                                  className="form-label"
                                             >
                                                  Description
                                             </label>
                                             <input
                                                  type="text"
                                                  className="form-control"
                                                  id="edescription"
                                                  name="edescription"
                                                  onChange={onChange}
                                                  value={note.edescription}
                                                  required
                                                  minLength={10}
                                             />
                                        </div>
                                        <div className="mb-3">
                                             <label
                                                  htmlFor="etag"
                                                  className="form-label"
                                             >
                                                  Tags
                                             </label>
                                             <input
                                                  type="text"
                                                  className="form-control"
                                                  id="etag"
                                                  name="etag"
                                                  onChange={onChange}
                                                  value={note.etag}
                                             />
                                        </div>
                                   </form>
                              </div>
                              <div className="modal-footer">
                                   <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                        ref={refClose}
                                   >
                                        Close
                                   </button>
                                   <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={handleUpdate}
                                        disabled={
                                             note.etitle.length < 5 ||
                                             note.edescription.length < 5
                                        }
                                   >
                                        Update Notes
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>

               <section className="row my-3">
                    <h2>Your notes</h2>
                    {notes.length === 0 ? (
                         <div className="container">No notes to display</div>
                    ) : (
                         notes.map((note) => {
                              return (
                                   <NoteItem
                                        note={note}
                                        updateNote={updateNote}
                                        key={note._id}
                                   />
                              );
                         })
                    )}
               </section>
          </>
     );
}
