import React, { useContext } from "react";
import NoteContext from "../context/note/noteContext";

export default function NoteItem(props) {
     const { note, updateNote } = props;
     const { deleteNote } = useContext(NoteContext);
     return (
          <div>
               <div
                    className="card"
                    style={{ width: "18rem" }}
               >
                    <div className="card-body">
                         <div className="d-flex align-items-center">
                              <h5 className="card-title">{note.title}</h5>
                              <i
                                   className="fa-solid fa-pen-to-square mx-2"
                                   onClick={()=>updateNote(note)}
                              ></i>
                              <i
                                   className="fa-solid fa-trash mx-2"
                                   onClick={() => {
                                        deleteNote(note._id);
                                   }}
                              ></i>
                         </div>

                         <p className="card-text">{note.description}</p>
                    </div>
               </div>
          </div>
     );
}
