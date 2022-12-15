import React , { useState , useContext } from 'react'
import './Form.css'
import axios from 'axios'
import { DataContext } from '../../contexts/DataContext'


const Form = () => {
  
    const {area , setArea , setData } = useContext(DataContext)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&units=metric&appid=cbebd8f6158f87942455477e3168d5e8`
    
    const searchLocation = (e) => {
        if(e.key === 'Enter') {
          axios.get(url).then((res) => {
              setData(res.data)
              console.log(res.data)
          })
            setArea('')
        }
    }


  return (
      <div className="form-container">
          <div className="form">
         <input
           value={area}
           placeholder='Enter an area' 
           onChange={e => setArea(e.target.value)}
           onKeyPress={searchLocation}
           type="text"  />
          </div>
      </div>
  )
}

export default Form