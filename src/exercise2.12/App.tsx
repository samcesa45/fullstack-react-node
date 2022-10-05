import axios from "axios"
import React, {  useEffect, useState } from "react"
import { Countries } from "../types/types"
import Country from "./components/Country"
import FilterCountry from "./components/FilterCountry"
import Form from "./components/Form"

const App=()=>{

    const [countries,setCountries] = useState<Countries[]>([])
    const [search,setSearch] = useState('')

    useEffect(()=>{
        axios.get('https://restcountries.com/v2/all')
        .then(response=>{
            console.log(response.data)
            setCountries(response.data)
        })
    },[])

    const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearch(event.target.value)
    }

    const showCountry=(event:React.FormEvent)=>{
            console.log(event.currentTarget.attributes.getNamedItem('id'));
            setSearch(event.currentTarget.id)  

    }

    return (
        <section className="pt-8">
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