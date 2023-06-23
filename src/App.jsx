import { useState } from 'react'
import './App.css'
import ImageFond from './components/ImageFond'
import Info from './components/Info'
import Portada from './components/Portada'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <ImageFond/>
      <Info/>
      <Cant/>
      <Portada/>
    </div>
        
  )
}

export default App
