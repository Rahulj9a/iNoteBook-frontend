import React, { useContext, useState } from "react";
import NoteContext from "../context/note/noteContext";
export default function AddNote() {
    const [note, setNote] = useState({title:"", description:"",tag:""})
     const context = useContext(NoteContext);
     const { addNote } = context;
    const handleAddNote = (e) => {
        e.preventDefault()
         addNote(note)
     };
    const onChange = (e) => {
        setNote({
            ...note, [e.target.name]:e.target.value
         })
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
                              />
                         </div>
                         <div className="mb-3 form-check">
                              <input
                                   type="checkbox"
                                   className="form-check-input"
                                   id="exampleCheck1"
                              />
                              <label
                                   className="form-check-label"
                                   htmlFor="exampleCheck1"
                              >
                                   Check me out
                              </label>
                         </div>
                         <button
                              type="submit"
                              className="btn btn-primary"
                              onClick={handleAddNote}
                         >
                              Submit
                         </button>
                    </form>
               </section>
          </div>
     );
}
