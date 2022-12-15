import React , {useContext} from 'react'
import { DataContext } from '../../contexts/DataContext'
import './Middle.css'

const Middle = () => {

  const {data} = useContext(DataContext)

  return (
    <div className="middle">
<div className="middle-container">
     <div className="city-info">
       <div className="city">
         <h1>{data.name}</h1>
       </div>
      <div className="temp">
        <p>{(data.main.temp).toFixed()}°C</p>
      </div>  
     </div>
     <div className="weather">
       <h2>{data.weather[0].main}</h2>
     </div>
   </div>
    </div>
  )
}

export default Middle