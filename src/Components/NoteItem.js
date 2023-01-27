import React from "react";

export default function NoteItem(props) {
     const { title, description } = props.note;
     return (
          <div>
               <div
                    class="card"
                    style={{ width: "18rem" }}
               >
                    <div class="card-body">
                         <h5 class="card-title">{title}</h5>
                         <p class="card-text">{description}</p>
                         <a
                              href="#"
                              class="btn btn-primary"
                         >
                              Go somewhere
                         </a>
                    </div>
               </div>
          </div>
     );
}
