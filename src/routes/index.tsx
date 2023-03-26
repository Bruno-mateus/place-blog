import {createBrowserRouter} from 'react-router-dom'
import { Header } from '../componets/Header'
import { Home } from '../pages/Home'
import { PagePost } from '../pages/PostPage'
import { UserProfile } from '../pages/UserProfile'
import { Users } from '../pages/Users'

export const router = createBrowserRouter([

    {
        path:'/',
        element: <Home/>
    },
    {
        path:'/post/:id',
        element:<PagePost/>
    },
    {
        path:'/users',
        element:<Users/>
    },
    {
        path:'/user/:id',
        element:<UserProfile/>
    }
])