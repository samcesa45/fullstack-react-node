import { Countries } from "../../types/types"

type ICountry={
    filteredName:Countries[]
}
const Country=({filteredName}:ICountry)=>{

    return(
        <section>
            
           <h1 className="font-bold text-xl my-4">{filteredName[0].name}</h1> 
           <div>capital {filteredName[0].capital}</div>
           <div>area {filteredName[0].area}</div>
           <p className="font-bold">languages:</p>
           <ul>{filteredName[0].languages.map(language=>(
            <div key={language.name}>
            <li className="list">{language.name}</li>
            </div>
           ))}</ul>
           <div className="my-3 h-[100px] w-[100px]">
           <img src={filteredName[0].flag} alt={`${filteredName[0].name} flag`} className="w-full h-full" />
           </div>
        </section>
    )
}

export default Country