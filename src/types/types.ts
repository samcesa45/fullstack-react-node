export interface Notes {
    id:number,
    content:string,
    date:string,
    important:boolean
}



export type IParts={
    name:string,
    exercises:number,
    id:number
}
 




export type ICourses={
    id:number,
    name:string,
    parts: IParts[],
   
    
} 

export type IPersons={
    name:string,
    number:string,
    id:string
}
export type Languages={
    name:string,
    nativeName:string
}
export type Countries={
    name:string,
    capital:string,
    area:number,
    languages:Languages[],
    flag:string

}