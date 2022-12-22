type IProps={
    search:string,
    onFilterChange:(event: React.ChangeEvent<HTMLInputElement>)=>void
}

const FilterInput=({ search,onFilterChange }:IProps) => {
  return (
    <div className="my-4 grid">
      <label className="mr-3 mb-3 text-xl" htmlFor="names">Filter shown with</label>
      <input
        className="border  text-white font-semibold bg-gray-600 border-gray-600 mb-4 rounded px-2 py-1 focus:ring focus:outline-none"
        type="text"
        name="names"
        id="names"
        value={search}
        onChange={(e) => onFilterChange(e)}
      />
    </div>
  )
}

export default FilterInput