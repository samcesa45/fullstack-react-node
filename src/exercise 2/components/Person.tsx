import { IPersons } from "../../types/types"

type IPerson ={
    search:string,
    persons:IPersons[],
    onRemovePerson:(id:string)=>void
   
}
const Person=({search,persons,onRemovePerson}:IPerson)=>{
    let filteredPerson = persons
    if(search){
        filteredPerson = filteredPerson.filter(person=> person.name.toLowerCase().includes(search.toLowerCase()) )
    }
   const displayPersons = filteredPerson && filteredPerson.map(person => (
                <li key={person.id}>{person.name} {person.number} 
                <button 
                    className="bg-red-400 text-white rounded px-1 border" 
                    onClick={()=>onRemovePerson(person.id)}>delete
                </button>
            </li>
   ))
  
    return(
       <ul>{displayPersons}</ul>
    )
}

export default Person