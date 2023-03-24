import axios, { AxiosError } from "axios"
import { ReactNode,useState, useCallback,useEffect } from "react"
import{createContext}from 'use-context-selector'

interface PostContexProvider{
    children:ReactNode
}

interface PostProps{
    userId:string
    id:string
    title:string
    body:string
}



interface PostContextType{
    getPosts:()=>void
    posts:PostProps[]
    isLoading:boolean
    error: string
}

export const PostContext = createContext<PostContextType>({} as PostContextType) 

export function PostProvider({children}:PostContexProvider){
    const [posts,setPosts] = useState<PostProps[]>([])
    const [isLoading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>('')
        
    const getPosts = useCallback(async()=>{
        try{
           const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setLoading(true)
            setPosts(response.data)
           
        }catch(err){
            if(err instanceof AxiosError && err.message){
                setError(err.message)
            }
        }finally{
            setLoading(false)
        }
    },[posts])

    useEffect(() =>{
        getPosts()
    },[])

        return (
            <PostContext.Provider value={{posts,isLoading,error,getPosts}}>
                {children}
            </PostContext.Provider>
            
        )
}