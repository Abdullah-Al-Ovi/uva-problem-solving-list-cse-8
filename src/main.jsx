import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster></Toaster>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Routes}>
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
