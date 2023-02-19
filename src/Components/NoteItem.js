import React from "react";

export default function NoteItem(props) {
     const { title, description } = props.note;
     return (
          <div>
               <div
                    className="card"
                    style={{ width: "18rem" }}
               >
                    <div className="card-body">
                         <div className="d-flex align-items-center">
                              <h5 className="card-title">{title}</h5>
                              <i className="fa-solid fa-pen-to-square mx-2"></i>
                              <i className="fa-solid fa-trash mx-2"></i>
                         </div>

                         <p className="card-text">{description}</p>
                    </div>
               </div>
          </div>
     );
}
