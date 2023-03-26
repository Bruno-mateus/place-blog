import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { Header } from './componets/Header'
import { router } from './routes'
import { globalStyles } from './styles/global'

globalStyles()
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    
    <React.StrictMode>
      <QueryClientProvider client={queryClient} >
          <Header/>
          <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
    
    
)
