import React from "react"

type IFormProps={
  newName:string,
  newNumber:string,
  onAddNumber:(event:React.ChangeEvent<HTMLInputElement>)=>void,
  onAddName:(event:React.ChangeEvent<HTMLInputElement>)=>void,
  onAddPerson:(event:React.FormEvent<HTMLFormElement>)=>void
}
const Form=({newName,newNumber,onAddName,onAddNumber,onAddPerson}:IFormProps)=>{
    


    return(
        <form className='shadow  p-4  mx-auto' onSubmit={(event)=>onAddPerson(event)}>
                <div>
                    <label className="mr-3" htmlFor="names">Name</label>
                    <input 
                    className="border  mb-4 rounded px-2 py-1 focus:ring focus:outline-none" 
                    type="text" 
                    name="names" 
                    id="names"
                    value={newName}
                    onChange={(event)=>onAddName(event)}
                     />
                </div>
                <div>
                    <label className="mr-2" htmlFor="number">Number</label>
                    <input 
                    className="border  rounded px-2 py-1 focus:ring focus:outline-none" 
                    type="number" 
                    name="number" 
                    id="number"
                    value={newNumber}
                    onChange={(event)=>onAddNumber(event)}
                     />
                </div>
                <div>
                    <button className="border my-2  px-4 rounded py-1 bg-blue-500 text-white" type="submit">add</button>
                </div>
            </form>
    )
}

export default Form