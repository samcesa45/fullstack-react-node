import axios from "axios";
const baseUrl = 'http://localhost:3001/api/notes'

const getAll=()=>{
    const request = axios.get(baseUrl)
   return request.then(response => {
        console.log(response.data)
        return response.data
    }
    )
}

const create=(newObject:object)=>{
    const request = axios.post(baseUrl,newObject)
    return request.then(response=>response.data)
}

const update=(id:string,newObject:object)=>{
    const request = axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response=>response.data)
}


export const noteService ={
    getAll,
    create,
    update
}