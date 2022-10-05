import React, { useEffect, useState } from "react";
import Person from "./components/Person";
import { nanoid } from "nanoid";
import FilterInput from "./components/FilterInput";
import Form from "./components/Form";
import personService from './services/person'
import { IPersons } from "../types/types";
const App=()=>{
    const [persons,setPersons] = useState<IPersons[]>([])
    const [search,setSearch] = useState('')
    const [newName,setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')

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
        if(person){
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                personService.update(id!,newPersonObject)
                .then(returnedPerson=>{ 
                    setPersons(persons.map(person=>person.id !== id ? person : returnedPerson))
                }).catch(err=>console.error(err))
            }
        }
        
       else{
            personService.create(newPersonObject)
            .then(returnedPerson=>{
                setPersons([...persons,returnedPerson])
            })
            .catch(err=>console.error(err))
        }
        
        
    }
    

    const handleRemovePerson=(id:string)=>{
        console.log(`this person with an id of ${id} was removed`);
        const person = persons.find(person=> person.id === id)
         if(window.confirm(`Are you sure you want to Delete ${person?.name} ?`)){
             personService.deletePerson(id)
             .then(returnedPerson=>{
                 setPersons(persons.filter(person=>person.id !== id))
             })

         }

        
        
    }
    return (
        <div className="text-center">
            <h2 className="font-bold text-center text-2xl my-3">Phonebook</h2>
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
            <h2 className="font-bold text-xl my-3">Numbers</h2>
            
            <Person 
            search={search} 
            persons={persons}
            onRemovePerson={handleRemovePerson}
            />
            
            
        </div>
    )
}

export default App