
import React, { useEffect, useRef, useState } from 'react'
import Note from './components/Note/Note'
import { Notes, User } from './types/types'
import { noteService } from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'
import Login from './pages/Login'
import { loginService } from './services/login'
import NoteForm from './components/NoteForm/NoteForm'
import Togglable from './components/Togglable/Togglable'

interface toggleVisibilityProps {
  toggleVisibility: () => void
}

const App = () => {
  const [notes, setNotes] = useState<Notes[]>([])
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const noteFormRef = useRef<null | toggleVisibilityProps>(null)

  useEffect(() => {
    noteService.getAll()
      .then(initialNotes => setNotes(initialNotes))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON !== null) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const toggleImportanceOf = (id: string) => {
    const note = notes.find(n => n.id === id)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const updatedNote = { ...note, important: !note?.important }

    noteService.update(id, updatedNote).then(returnedNote => {
      setNotes(notes.map(note => note.id !== id ? note : returnedNote))
    })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .catch(_error => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        setErrorMessage(`Note '${note?.content}' was already removed from server`)

        setTimeout(() => {
          setErrorMessage(null)
        }, 2000)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const addNote = async (noteObject: object) => {
    try {
      if (noteFormRef.current !== null) {
        noteFormRef.current.toggleVisibility()
      }
      const returnedNote = await noteService.create(noteObject)
      setNotes([...notes, returnedNote])
    } catch (exception) {
      console.error(exception)
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const logout = () => {
    window.localStorage.clear()
  }

  return (
    <div>
      <h1 className='font-bold text-2xl my-3'>Notes</h1>
      <Notification message={errorMessage}/>
      { user === null
        ? <Togglable buttonLabel='login'>
          <Login
            username={username}
            password={password}
            onNameChange={(event) => handleNameChange(event)}
            onPasswordChange={(event) => handlePasswordChange(event)}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onLogin={handleLogin}/>
        </Togglable>
        : <div>
          <div className='flex gap-2'>
            <p>{user?.name} logged-in </p>
            <button
              className='bg-gray-200  px-2 py-1 rounded capitalize mb-4'
              onClick={logout}>
                logout
            </button>
          </div>
          <Togglable buttonLabel='new note' ref={noteFormRef}>
            <NoteForm
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              createNote={addNote}

            />
          </Togglable>
        </div>
      }
      <div>
        <button className='border px-2 py-1 my-4'
          onClick={() => setShowAll(!showAll)}
        >show
          <span className='font-bold ml-2 text-blue-500'>{showAll ? 'important' : 'all'}</span>
        </button>
      </div>
      <ul>
        {
          notesToShow.map((note) => (
            <Note note={note} key={note.id} toggleImportance={() => toggleImportanceOf(note.id)}/>

          ))
        }
      </ul>

      <Footer/>

    </div>
  )
}

export default App
