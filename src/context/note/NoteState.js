import NoteContext from "./noteContext";
import React from "react";

const NoteState = (props) => {
    const state = {
        'name': 'Rahul',
        'isDev': "true"
    }
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 