import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import { AuthProvider } from './context/AuthProvider'
import 'aos/dist/aos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes}/>
    </AuthProvider>
  </React.StrictMode>,
)
