import React, { useEffect, useState } from "react";
import Person from "./components/Person";
import { nanoid } from "nanoid";
import FilterInput from "./components/FilterInput";
import Form from "./components/Form";
import personService from './services/person'
import { IError, IPersons } from "../types/types";
import Notification from "./components/Notifications";
const App=()=>{
    const [persons,setPersons] = useState<IPersons[]>([])
    const [search,setSearch] = useState('')
    const [newName,setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')
    const [messages,setMessages] = useState({
        error:'',
        success:''
    })
  

    const handleNameChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setNewName(event.target.value)
    }

    const handleNumberChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setNewNumber(event.target.value)
    }


    useEffect(()=>{
        personService.getAll()
        .then(initialPerson=>{
            setPersons(initialPerson)
        })
        .catch(err=>console.error)
    },[])

   

    const handleFilterChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value)
    }

      

    
    const HandleSubmitPerson=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const person =  persons.find(person => person.name === newName)
        const id = persons.find(person=> person.name === newName)?.id

        const newPersonObject ={
           id:`person-${nanoid()}`,
           name:newName,
           number:newNumber
        }
        if(newName.length === 0 || newNumber.length === 0) return;
        if(person){
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                personService.update(id!,newPersonObject)
                .then(returnedPerson=>{ 
                    setPersons(persons.map(person=>person.id !== id ? person : returnedPerson))
                    
                    setMessages({...messages, error:'',success:`Updated ${newName}`})

                setTimeout(()=>{
                      setMessages({...messages,error:'',success:''})
                },2000)
                    
                    setNewName('')
                    setNewNumber('')
                }).catch(err=>{
                    setMessages({error:` '${person.name}' could not be updated`,success:''})

                    setTimeout(()=>{
                          setMessages({error:'',success:''})
                    },2000)
                })
            }
        }
        
       else{
        const id = persons.find(person=> person.name === newName)?.id
            personService.create(newPersonObject)
            .then(returnedPerson=>{
                setPersons([...persons,returnedPerson])

                setMessages({...messages, error:'',success:`Added ${newName}`})

                setTimeout(()=>{
                      setMessages({...messages,error:'',success:''})
                },2000)
                setNewName('')
                setNewNumber('')
            })
            .catch((err:IError)=>{
                console.log(err.response.data.error);
                setMessages({...messages, error:`${err.response.data.error}`,success:''})

                    setTimeout(()=>{
                          setMessages({...messages, error:'',success:''})
                    },10000)
            })
        }
        
        
    }
    

    const handleRemovePerson=(id:string)=>{
        console.log(`this person with an id of ${id} was removed`);
        const person = persons.find(person=> person.id === id)
         if(window.confirm(`Are you sure you want to Delete ${person?.name} ?`)){
             personService.deletePerson(id)
             .then(returnedPerson=>{
                 setPersons(persons.filter(person=>person.id !== id))
                 setMessages({...messages, error:'',success:`${newName} Deleted successful`})

                setTimeout(()=>{
                      setMessages({...messages,error:'',success:''})
                },2000)
             }).catch(error=>{
                
                setMessages({...messages, error:` ${person?.name}  and ${person?.number} could not be removed`,success:''})

                setTimeout(()=>{
                      setMessages({...messages,error:'',success:''})
                },2000)
             })

         }

        
        
    }
    return (
        <div className="border box-border px-3 shadow bg-gray-700 text-white rounded py-4 my-24 mx-auto sm:w-[40vw] lg:w-[40vw]">
            <h2 className="font-bold text-center text-4xl my-3 text-blue-500">Phonebook</h2>
            
             <Notification messages={messages}/>
            <FilterInput 
                onFilterChange={handleFilterChange} 
                search={search}
             />
            
            <Form 
             newName={newName}
             newNumber={newNumber}
             onAddNumber={handleNumberChange}
             onAddName={handleNameChange}
             onAddPerson={HandleSubmitPerson}
           
            />
            <h2 className="font-bold text-2xl my-3 text-center text-blue-500">Mobile Numbers And Name Details</h2>
            
            <Person 
            search={search} 
            persons={persons}
            onRemovePerson={handleRemovePerson}
            />
            
            
        </div>
    )
}

export default App