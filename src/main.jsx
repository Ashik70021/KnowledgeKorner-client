import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClientContext } from '@tanstack/react-query'


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientContext client={ queryClient}>
        <RouterProvider router={router} />
      </QueryClientContext>
      <Toaster></Toaster>
    </AuthProvider>
  </React.StrictMode>,
)
