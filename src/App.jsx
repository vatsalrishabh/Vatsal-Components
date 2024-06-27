import { useState } from 'react'
import './App.css'
import Navbar1 from './Components/Navbars/Navbar1'
import Modal1 from './Components/Modals/Modal1'
import Spinner1 from './Components/Spinners/Spinner1'
import Spinner2 from './Components/Spinners/Spinner2'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar1/> {/* Pure Bootstrap */}
   <Modal1/> {/* Pure Bootstrap */}
   <Spinner1/> {/* Pure Bootstrap */}
   <Spinner2/>

   </>
  )
}

export default App
