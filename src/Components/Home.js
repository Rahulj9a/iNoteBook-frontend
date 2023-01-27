import React, { useContext } from "react";
import NoteContext from "../context/note/noteContext";

export default function Home() {
     return (
          <>
               <section>
                    <h1>Add Note</h1>
               </section>
               <section>
                    <h1>Your notes</h1>
               </section>
          </>
     );
}
