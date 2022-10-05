

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Note from './components/Note'
import {Notes} from './types/types'
type IApp={
    notesData : Notes[]
}

const App=()=>{
    //  const initialnotes = notesData 
     const [notes,setNotes] = useState<Notes[]>([])
     const [newNote,setNewNote] = useState('')
     const [showAll,setShowAll] = useState(true)

     useEffect(()=>{
        axios.get('http://localhost:3001/notes')
        .then(response=> {
            console.log(response.data);
            
            setNotes(response.data)
        })
        .catch(err=> console.error(err))
     },[])
     

     const notesToShow = showAll ? notes : notes.filter(note => note.important)


     const addNote=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        if(!newNote) return;
        const newNotesObject = {
            id: notes.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: false
          }
          axios.post('http://localhost:3001/notes',newNotesObject)
          .then(response => {
            setNotes([...notes,response.data])
            setNewNote('')
        })
          .catch(err=>console.error(err))
        //  setNotes([...notes,newNotesObject])
     }

    return (
    <div>
        <h1 className='font-bold text-2xl my-3'>Notes</h1>
        
        <div>
            <button className='border px-2 py-1 my-4' 
            onClick={()=>setShowAll(!showAll)}
            >show 
            <span className='font-bold ml-2 text-blue-500'>{showAll ? 'important' : 'all'}</span>
            </button>
        </div>
        <form  onSubmit={addNote}>
            <input 
            className='px-2 border py-1 rounded focus:outline-none focus:ring'
             placeholder='type here...'
             value={newNote}
             onChange={(e)=>setNewNote(e.target.value)}
             
             />
            <button className='border px-2 py-1 ml-4 rounded bg-blue-500 text-white focus:ring' type='submit'>save</button>
        </form>
        <ul>
            {
                notesToShow.map((note) =>(
                   <Note note={note} key={note.id}/>

                ))
            }
        </ul>
       
    </div>
    )
}


export default App



// import Course from "./components/Course"
// import { ICourses } from "./types/types"


// type IApp={
//     courses:ICourses
// }
 


// const App=({courses}:IApp)=>{
   
//         return (
//         <Course courses={courses}/>
//         )
//     }
    
    
// export default App