import React, {useState, useEffect} from "react"
import './converter.css'

type TemperatureUpdaterProps = {
    temperature?: number,
    setTemperature?: React.ChangeEventHandler<HTMLInputElement> //React.Dispatch<React.SetStateAction<number>>
}


export default ()=>{
    const [temperature, setTemperature] = useState(0);

    const update =(event: React.ChangeEvent<HTMLInputElement> ):void => {
        const fahrenheit:number = Number.parseFloat(event.target.value);
        const celcius = (fahrenheit - 32) * 5/9;
        setTemperature(celcius);
    }
    
    return(
    <div className="greenborder">
        <FahrenheitComponent setTemperature={update}></FahrenheitComponent>
        <CelciusComponent temperature={temperature}></CelciusComponent>
    </div>);
    
}

const FahrenheitComponent = ({setTemperature}:TemperatureUpdaterProps)=>{
    return (
    <div className="redborder">
        <input type="text" onChange={setTemperature} placeholder="Enter temperature in fahrenheit"/>
    </div>);
}

const CelciusComponent = ({temperature}:TemperatureUpdaterProps) => {
    return <div className="blueborder">
        Temperature in Celcius:{" "} {temperature}
    </div>
}