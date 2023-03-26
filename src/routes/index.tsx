import {createBrowserRouter} from 'react-router-dom'
import { Home } from '../pages/Home'
import { PagePost } from '../pages/PostPage'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/post/:id',
        element:<PagePost/>
    }
])