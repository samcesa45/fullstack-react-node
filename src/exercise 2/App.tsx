import React, { useEffect, useState } from "react";
import Person from "./components/Person";
import { nanoid } from "nanoid";
import FilterInput from "./components/FilterInput";
import Form from "./components/Form";
import axios from "axios";
import { IPersons } from "../types/types";
const App=()=>{
    const [persons,setPersons] = useState<IPersons[]>([])

    const [search,setSearch] = useState('')

    const [newName,setNewName] = useState('')
    const [newNumber,setNewNumber] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:3002/persons')
        .then(response=>{
            console.log(response.data)
            setPersons(response.data)

        })
        .catch(err=>console.error)
    },[])

    const handleNameChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setNewName(event.target.value)
    }

    const handleNumberChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setNewNumber(event.target.value)
    }

    const handleFilterChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value)
    }

    
    
      let filteredPerson =  persons.filter(person =>person.name.toLowerCase().includes(search.toLowerCase()))
   

    
    const HandleSubmitPerson=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const getName =  persons.find(person => person)
        if(getName?.name.toLowerCase() === newName.toLowerCase()){
            alert(`${newName} is already added to phonebook`); 
            return;
        }
        const newPersonObject ={
           id:`person-${nanoid()}`,
           name:newName,
           number:newNumber
        }

        setPersons([...persons,newPersonObject])
        setNewName('')
        setNewNumber('')
    }

    return (
        <div className="text-center">
            <h2 className="font-bold text-center text-2xl my-3">Phonebook</h2>
            <FilterInput 
                onFilterChange={handleFilterChange} 
                search={search}
             />
            
            <Form 
            onAddPerson={HandleSubmitPerson} 
            onNameChange={handleNameChange} 
            onNumberChange={handleNumberChange}
            newName={newName}
            newNumber={newNumber}
            />
            <h2 className="font-bold text-xl my-3">Numbers</h2>
            <ul>
                {filteredPerson.map(person=>
                   <Person key={person.id}  name={person.name} number={person.number}/>
                )}
            </ul>
        </div>
    )
}

export default App