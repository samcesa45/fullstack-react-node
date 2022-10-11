import { Notes } from "../types/types"

type INote={
    note:Notes,
    toggleImportance:(id:string)=>void
}
const Note =({note,toggleImportance}:INote)=>{
  const label = note.important ? 'make not important' : 'make important'
  return (
    <li className="mt-2" key={note.id}>{
    note.content}
     <button className="px-2 border rounded text-white bg-blue-500" onClick={()=>toggleImportance(note.id)}>{label}</button>
    </li>
  )
}

export default Note