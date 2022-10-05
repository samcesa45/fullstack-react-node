import { Countries } from "../../types/types"
import Country from "./Country"

type ICountry={
    countries:Countries[]
    search:string,
    showCountry:(event:React.FormEvent)=>void
}
const FilterCountry=({countries,search,showCountry}:ICountry)=>{
    let filteredName = countries.filter(country=> country.name.toLowerCase().includes(search.toLowerCase()))
   
   
    let displayCountry = filteredName.map((country)=>(
        <li key={country.name}>{country.name} 
        
        <button className="px-2 rounded border" id={country.name} onClick={(event)=>showCountry(event)}>show</button>
        </li>
      ))

        
    
    

    if(filteredName.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    }

    if(filteredName.length === 1){
        return <Country filteredName={filteredName}/>
    }
    return(
        <section>
             {displayCountry}
        </section>
    )
}

export default FilterCountry