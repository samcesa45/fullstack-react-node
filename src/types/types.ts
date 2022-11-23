export interface Notes {
    id:string,
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
 type IWind={
    speed:number,
    degree:number
}
export type IWeather={
    // id:number,
    // main:string,
    description:string,
    icon:string
}

type IMain={
    temp:  number,
    // feels_like:  number,
    // temp_min:  number,
    // temp_max:  number,
    // pressure: number,
    humidity: number
}
type ISystem={
    type:number,
    id:number,
    country:string,
    sunrise:number,
    sunset:number
}

export type WeatherProps={
weather:IWeather[],
main:IMain,
wind:IWind,
sys:ISystem,
name:string,
id:number
}

export type IError={
  response:{data:{error:string}}
}

export type User = {
    username:string,
    name:string,
    password:string,
    token:string
}