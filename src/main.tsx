import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PostProvider } from './contexts/PostContext'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <PostProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    </PostProvider>
)
