import { Notes } from "../types/types"

type INote={
    note:Notes
}
const Note =({note}:INote)=>{
  return (
    <li key={note.id}>{note.content}</li>
  )
}

export default Note