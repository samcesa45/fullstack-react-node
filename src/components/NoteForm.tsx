import React, { ChangeEvent, FormEvent } from 'react'

type Props = {
    onAddNote:(event:FormEvent<HTMLFormElement>)=>void,
    newNote:string,
    onNoteChange:(event:ChangeEvent<HTMLInputElement>)=>void
}

const NoteForm = ({onNoteChange,newNote,onAddNote}: Props) => {
  return (
    <form  onSubmit={onAddNote}>
      <input 
      className='px-2 border py-1 rounded focus:outline-none focus:ring'
        placeholder='type here...'
        value={newNote}
        onChange={(event)=>onNoteChange(event)}
        
        />
      <button 
      className='border px-2 py-1 ml-4 rounded bg-blue-500 text-white focus:ring' type='submit'>
        save
      </button>
    </form>
  )
}

export default NoteForm