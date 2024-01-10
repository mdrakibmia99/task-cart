import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ModalProvider } from './contexts/ModalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
     <RouterProvider router={router} />
    </ModalProvider>
  </React.StrictMode>,
)
