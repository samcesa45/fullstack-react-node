import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'


const getAll=()=>{
    const request = axios.get(baseUrl)
    return request.then(response=> response.data)
}

const create=(newObject:object)=>{
    const request = axios.post(baseUrl,newObject)
    return request.then(response=>response.data)
}

const update=(id:string,newObject:object)=>{
    const request = axios.put(`${baseUrl}/${id}`,newObject)
    return request.then(response => response.data)
}

const deletePerson=(id:string)=>{
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response=>response.data)
}


export default{getAll,create,update,deletePerson}
