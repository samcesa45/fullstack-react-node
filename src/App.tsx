
import React, { useEffect, useState } from 'react'
import Note from './components/Note'
import {Notes, User} from './types/types'
import {noteService} from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'
import Login from './pages/Login'
import { loginService } from './services/login'
import NoteForm from './components/NoteForm'
import Togglable from './components/Togglable'



const App=()=>{
    
     const [notes,setNotes] = useState<Notes[]>([])
     const [newNote,setNewNote] = useState('')
     const [showAll,setShowAll] = useState(true)
     const [errorMessage,setErrorMessage] = useState<string | null>(null)
     const [username, setUsername] = useState('')
     const [password, setPassword] = useState('')
     const [user,setUser] = useState<User | null>(null)
     
     useEffect(()=>{
        noteService.getAll()
        .then(initialNotes=> setNotes(initialNotes))
        .catch(err=> console.error(err))
     },[])

     useEffect(()=> {
        const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
        if(loggedUserJSON){
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            noteService.setToken(user.token)
        }
     },[])
     

     const notesToShow = showAll ? notes : notes.filter(note => note.important)
     
     const toggleImportanceOf=(id:string)=>{

        const note = notes.find(n=>n.id === id)
        const updatedNote = {...note,important:!note?.important}
        
        noteService.update(id,updatedNote).then(returnedNote=>{
            setNotes(notes.map(note=>note.id !== id ? note : returnedNote) )
        })
        .catch(error=>{
            setErrorMessage(`Note '${note?.content}' was already removed from server`)

            setTimeout(()=>{
                setErrorMessage(null)
            },2000)
            setNotes(notes.filter(n=>n.id !== id))
        })
     }

     const addNote=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(!newNote) return;
        const newNotesObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: false
          }
          noteService.create(newNotesObject)
          .then(returnedNote => {
            setNotes([...notes,returnedNote])
            setNewNote('')
        })
          .catch(err=>console.error(err))
        
     }

     const handleNoteChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setNewNote(event.target.value)
     } 

     const handleNameChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
       setUsername(event.target.value)
     }
     const handlePasswordChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(event.target.value)
     }
     const handleLogin = async (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
       try {
        const user = await loginService.login({
            username,password
        })

        window.localStorage.setItem(
            'loggedNoteappUser',JSON.stringify(user)
        )
        noteService.setToken(user.token)
        setUser(user)
        setUsername('')
        setPassword('')
       } catch (exception) {
        setErrorMessage('Wrong credentials')
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
        { user === null ? 
        <Togglable buttonLabel='login'>
            <Login 
         username={username}
         password={password}
         onNameChange={(event)=>handleNameChange(event)}
         onPasswordChange={(event)=>handlePasswordChange(event)}
         onLogin={(e)=>handleLogin(e)}/>
        </Togglable>
         :
         <div>
           <div className='flex gap-2'>
           <p>{user.name} logged-in </p> 
           <button 
                className='bg-gray-200  px-2 py-1 rounded capitalize mb-4' 
                onClick={logout}>
                logout
           </button>
           </div>
            <Togglable buttonLabel='new note'>
            <NoteForm 
            newNote={newNote} 
            onAddNote={addNote} 
            onNoteChange={(event)=>handleNoteChange(event)}
        />
            </Togglable>
         </div>
        }
        <div>
            <button className='border px-2 py-1 my-4' 
            onClick={()=>setShowAll(!showAll)}
            >show 
            <span className='font-bold ml-2 text-blue-500'>{showAll ? 'important' : 'all'}</span>
            </button>
        </div>
        <ul>
            {
                notesToShow.map((note) =>(
                   <Note note={note} key={note.id} toggleImportance={()=>toggleImportanceOf(note.id)}/>

                ))
            }
        </ul>

        <Footer/>
       
    </div>
    )
}


export default App



