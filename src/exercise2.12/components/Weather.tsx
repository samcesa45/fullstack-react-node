import axios from "axios";
import {  useEffect, useState } from "react";
import {WeatherProps} from "../../types/types";

type IWeather={
capital:string
}
const Weather=({capital}:IWeather)=>{
    const initialState = {} as WeatherProps
    const [weather,setWeather] = useState(initialState)
    let tempDeg =  Math.floor(weather.main?.temp - 273.15)
    let value = weather.weather
    const imgurl = `http://openweathermap.org/img/wn/${value?.[0].icon}.png`
    const imgAlt = value?.[0].description
   
    
    useEffect(()=>{
         axios.get( `https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(response=>{
            setWeather(response.data)
        }).catch(err=>console.error(err))
    },[])
  
    
    return(
        <div>
            <>
            <h1 className="font-bold text-2xl">Weather in {capital}</h1>
            <p>temperature {tempDeg} Celsius</p>
            <img src={imgurl} alt={imgAlt}/>
            <p className="font-bold">speed {Math.floor(weather.wind?.speed * 3.6)}km/h</p>
            <p className="font-bold">{weather.main?.humidity}%</p>
            
            </>
        </div>
    )
}

export default Weather;