import { useState } from "react";
type IPerson ={
    name:string,
    number:string
   
}
const Person=({name,number}:IPerson)=>{
   
  
    return(
        <li>{name} {number}</li>
    )
}

export default Person