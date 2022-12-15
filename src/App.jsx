import React , {useState} from 'react'
import { DataContext } from './contexts/DataContext'
import Form from './components/Form/Form'
import Middle from './components/Middle/Middle'
import Bottom from './components/Bottom/Bottom'


const App = () => {
    const [area,setArea] = useState('')
    const [data,setData] = useState({})

  return (
    <DataContext.Provider value={{ area , setArea , data ,setData }} >
     <div className='App'>
      <div className="container">
       <Form />
       <Middle />
       <Bottom />
      </div>
     </div>
    </DataContext.Provider>
  )
}

export default App