import React, {useContext} from "react";
import NoteContext from "../context/note/noteContext";

import Notes from "./Notes";

export default function Home(props) {
     const context = useContext(NoteContext);
     const {alertMessage } = context;
     if (alertMessage) {
         props.showAlert(alertMessage)
    }
     return (
          <>
              
               <Notes />
          </>
     );
}
