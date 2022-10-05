import axios from "axios"
import React, {  useEffect, useState } from "react"
import { Countries} from "../types/types"
import FilterCountry from "./components/FilterCountry"
import Form from "./components/Form"

const App=()=>{
    const [countries,setCountries] = useState<Countries[]>([])
    const [search,setSearch] = useState('')

    useEffect(()=>{
        axios.get('https://restcountries.com/v2/all')
        .then(response=>{
            setCountries(response.data)  
        })
    },[])


    
    const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value)
    }

    const showCountry=(event:React.FormEvent)=>{
        // console.log(event.currentTarget.attributes.getNamedItem('id'));
         setSearch(event.currentTarget.id)    
    }

    return (
        <section className="pt-8 w-[50%] mx-auto border mt-16 px-4 shadow-md">
            <Form search={search} onChange={handleSearch}/>
            <FilterCountry 
            countries={countries} 
            showCountry={showCountry} 
            search={search}
            /> 
        </section>
    )
}

export default App