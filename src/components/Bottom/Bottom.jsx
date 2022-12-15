import React , { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'
import './Bottom.css'

const Bottom = () => {
    const { data } = useContext(DataContext)

  return (
    <div className="bottom-container">
        <div className="bottom">
            <div className="feels-like">
                <h3>Feels like</h3>
                <p>{(data.main.feels_like).toFixed()}°C</p>
            </div>
            <div className="humidity">
                <h3>Humidity</h3>
                <p>{data.main.humidity}%</p>
            </div>
            <div className="max-min">
                <h3>Max temp</h3>
                <p>{(data.main.temp_max).toFixed()}°C</p>
            </div>
        </div>
    </div>
  )
}

export default Bottom