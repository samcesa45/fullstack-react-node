import { Notes } from '../../types/types'

interface INote {
  note: Notes
  toggleImportance: (id: string) => void
}
const Note = ({ note, toggleImportance }: INote) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li className="mt-2 note" key={note.id}>
      <span>{note.content}</span>
      <button className="px-2 border rounded text-white bg-blue-500" onClick={() => toggleImportance(note.id)}>{label}</button>
    </li>
  )
}

export default Note
