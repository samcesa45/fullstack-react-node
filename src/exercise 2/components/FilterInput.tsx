type IProps={
    search:string,
    onFilterChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

const FilterInput=({search,onFilterChange}:IProps)=>{
    return (
        <div className="my-4">
            <label className="mr-3" htmlFor="names">Filter shown with</label>
            <input 
            className="border  mb-4 rounded px-2 py-1 focus:ring focus:outline-none" 
            type="text" 
            name="names" 
            id="names"
            value={search}
            onChange={(e)=>onFilterChange(e)}
                />
        </div>
    )
}

export default FilterInput