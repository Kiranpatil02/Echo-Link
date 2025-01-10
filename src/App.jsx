import Navbar from './Components/Navbar/Navbar'

import { Outlet} from 'react-router-dom'


function App() {

  

  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
