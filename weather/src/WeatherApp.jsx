import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
 const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.80,
    tempMin: 38.05,
    tempMax: 55.05,
    humidity: 47.09,
    temp: 45,
    weather: "haze",
    
 });

 let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo)
 };

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}