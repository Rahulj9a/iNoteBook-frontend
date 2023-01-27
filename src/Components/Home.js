import React, { useContext } from 'react'
import NoteContext from '../context/note/noteContext'

export default function Home() {
  const a = useContext(NoteContext)
  return (
    <div>Home {a.name}</div>
  )
}
