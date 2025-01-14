import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Upload from './Components/Upload/Upload.jsx'
import Body from './Components/Body/Body.jsx'
import Features from './Components/Features/Features.jsx'
import Speech2Sign from './Components/Speech2Sign/Speech2Sign.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/Home",
        element:<Body/>
      },
      {
        path:"/upload",
        element:<Upload/>
      },
      {
        path:"/features",
        element:<Features/>
      },
      {
        path:"/speech2sign",
        element:<Speech2Sign/>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
