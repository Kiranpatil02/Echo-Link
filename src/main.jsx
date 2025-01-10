import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Upload from './Components/Upload/Upload.jsx'
import Body from './Components/Body/Body.jsx'
import Features from './Components/Features/Features.jsx'

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
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
