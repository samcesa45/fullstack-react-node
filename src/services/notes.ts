import axios from "axios";
const baseUrl = '/api/notes'

const getAll=async ()=>{
    const request = axios.get(baseUrl)
   const response = await request;
    console.log(response.data);
    return response.data;
}

const create=async (newObject:object)=>{
    const request = axios.post(baseUrl,newObject)
    const response = await request;
    return response.data;
}

const update=async (id:string,newObject:object)=>{
    const request = axios.put(`${baseUrl}/${id}`,newObject)
    const response = await request;
    return response.data;
}


export const noteService ={
    getAll,
    create,
    update
}