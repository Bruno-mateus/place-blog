import { ContentHome, DescriptionPost, HeaderPost, Post} from "./styles";
import { ContainerDefault } from "../../styles/styles";
import axios from "axios";
import { useQuery } from "react-query";
import { PostProps } from "../../types/PostProps";
import { Link } from "react-router-dom";
import { SearchInput } from "../../componets/SearchInput";
import { useEffect, useState } from "react";
import { Heading } from "@bruno-gom-ignite-ui/react";
import { Header } from "../../componets/Header";
import { SpinnerCircular } from 'spinners-react';





export function Home(){

        const [postList,setListPost]=useState<PostProps[] | undefined>([])

        const {data:posts,error,isLoading,isFetching} = useQuery<PostProps[]>('posts', async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data
        })

        if(error){
             alert(error);
        }

        function filterPostList(query?:string){
            const queryLowerCase = query?.toLowerCase()
          const refreshPost = posts?.filter(post=>queryLowerCase?post.title.includes(queryLowerCase):posts)
            if(query===undefined) setListPost(posts)
            setListPost(refreshPost)
        }
        
        useEffect(()=>{
            setListPost(posts)
        },[posts])
        if(postList?.length===0){
            return(
                <>  
                <Header/>
                <ContainerDefault>
                    <SearchInput placeholder="Procurar um post" callback={filterPostList}/>
                    <Heading size={'lg'}>Nenhum Post Encontrado.</Heading>
                </ContainerDefault>
                </>

            )
        }
    return(
        <>
        <Header/>
        <ContainerDefault>
            <SearchInput placeholder="Procurar um post" callback={filterPostList}/>
            <ContentHome>

            {postList?.map(post=>{
                return(
                    <>
                        {
                            
                            isLoading || isFetching?(
                                <Post>
                                    <HeaderPost>
                                        <SpinnerCircular/>
                                    </HeaderPost>
                                    
                                </Post>
                                
                            ):(
                                <Link key={post.id} to={`/post/${post.id}`}>
                                    <Post>
                                        <HeaderPost>{post.title}</HeaderPost>
                                        <DescriptionPost size={'sm'}>{post.body}</DescriptionPost>
                                    </Post>
                                </Link>
                            )
                        }
                    </>

                )
            })}
                
            </ContentHome>
        </ContainerDefault>
        </>
    )
}