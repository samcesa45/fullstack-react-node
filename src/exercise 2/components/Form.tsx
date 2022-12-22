import React from 'react'

type IFormProps={
  newName:string,
  newNumber:string,
  onAddNumber:(event:React.ChangeEvent<HTMLInputElement>)=>void,
  onAddName:(event:React.ChangeEvent<HTMLInputElement>)=>void,
  onAddPerson:(event:React.FormEvent<HTMLFormElement>)=>void
}
const Form=({ newName,newNumber,onAddName,onAddNumber,onAddPerson }:IFormProps) => {



  return(
    <form className='' onSubmit={(event) => onAddPerson(event)}>
      <div className='grid' >
        <label className="mr-3 mb-3 text-xl" htmlFor="names">Name</label>
        <input
          className="border text-white text-xl font-semibold bg-gray-600 border-gray-600 mb-4 rounded px-2 py-1 focus:ring focus:outline-none"
          type="text"
          name="names"
          id="names"
          value={newName}
          onChange={(event) => onAddName(event)}
        />
      </div>
      <div className='grid'>
        <label className="mr-2 mb-3 text-xl" htmlFor="number">Mobile Number</label>
        <input
          className="border text-white text-xl font-semibold bg-gray-600 border-gray-600 mb-4 rounded px-2 py-1 focus:ring focus:outline-none"
          type="number"
          name="number"
          id="number"
          value={newNumber}
          onChange={(event) => onAddNumber(event)}
        />
      </div>
      <div className='grid'>
        <button className="border my-2  border-blue-500 uppercase px-4 rounded py-1 bg-blue-500 text-white" type="submit">add</button>
      </div>
    </form>
  )
}

export default Form