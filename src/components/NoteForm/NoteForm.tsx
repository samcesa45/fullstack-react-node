import React, { FormEvent, useState } from 'react'

interface Props {
  createNote: (value: object) => void
}

const NoteForm = ({ createNote }: Props) => {
  const [newNote, setNewNote] = useState('')

  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNote(event.target.value)
  }

  const onAddNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (newNote.length === 0) return
    createNote({
      content: newNote,
      date: new Date().toISOString(),
      important: false
    })

    setNewNote('')
  }
  return (
    <form onSubmit={onAddNote}>
      <input
        className='px-2 border py-1 rounded focus:outline-none focus:ring formDIv'
        placeholder='type here...'
        id='new-note'
        value={newNote}
        onChange={handleNoteChange}

      />
      <button
        id='save'
        className='border px-2 py-1 ml-4 rounded bg-blue-500 text-white focus:ring' type='submit'>
        save
      </button>
    </form>
  )
}

export default NoteForm
