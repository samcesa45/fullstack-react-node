type IFormProps={
    newName:string,
    onNameChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    newNumber:string
    onAddPerson:(event: React.FormEvent<HTMLFormElement>) => void,
    onNumberChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}
const Form=({onAddPerson,newName,newNumber,onNameChange,onNumberChange}:IFormProps)=>{
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
                    onChange={(e)=>onNameChange(e)}
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
                    onChange={(e)=>onNumberChange(e)}
                     />
                </div>
                <div>
                    <button className="border my-2  px-4 rounded py-1 bg-blue-500 text-white" type="submit">add</button>
                </div>
            </form>
    )
}

export default Form