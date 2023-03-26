import { ContentHome, DescriptionPost, HeaderPost, Post} from "./styles";
import { ContainerDefault } from "../../styles/styles";
import axios from "axios";
import { useQuery } from "react-query";
import { PostProps } from "../../types/PostProps";
import { Link } from "react-router-dom";
import { SearchInput } from "../../componets/SearchInput";
import { useCallback, useEffect, useState } from "react";
import { Heading } from "@bruno-gom-ignite-ui/react";
import { Header } from "../../componets/Header";





export function Home(){

        const [postList,setListPost]=useState<PostProps[] | undefined>([])

        const {data:posts,error,isLoading} = useQuery<PostProps[]>('posts', async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data
        })

        if(error){
             alert(error);
        }

        function filterPostList(query?:string){
          const refreshPost = posts?.filter(post=>query?post.title.includes(query):posts)
            if(query===undefined) setListPost(posts)
            setListPost(refreshPost)
            console.log(refreshPost)
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
                    <Heading size={'lg'}>Nenhum Post Encontrado</Heading>
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
                    <Link key={post.id} to={`/post/${post.id}`}>
                          <Post>
                            <HeaderPost>{post.title}</HeaderPost>
                            <DescriptionPost size={'sm'}>{post.body}</DescriptionPost>
                        </Post>
                    </Link>

                )
            })}
                
            </ContentHome>
        </ContainerDefault>
        </>
    )
}