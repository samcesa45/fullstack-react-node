import { IPersons } from '../../types/types'

type IPerson ={
    search:string,
    persons:IPersons[],
    onRemovePerson:(id:string)=>void

}
const Person=({ search,persons,onRemovePerson }:IPerson) => {
  let filteredPerson = persons
  if(search){
    filteredPerson = filteredPerson.filter(person => person.name.toLowerCase().includes(search.toLowerCase()) )
  }
  const displayPersons = filteredPerson && filteredPerson.map(person => (
    <li className="mb-3 font-bold text-xl  text-blue-500  py-2 px-2 flex justify-between place-items-center" key={person.id}>{person.name} {person.number}
      <button
        className="bg-red-500 capitalize border-red-500 text-white rounded ml-4 px-1 border"
        onClick={() => onRemovePerson(person.id)}>delete
      </button>
    </li>
  ))

  return(
    <ul className="shadow border border-gray-600 p-4 rounded ">{displayPersons}</ul>
  )
}

export default Person