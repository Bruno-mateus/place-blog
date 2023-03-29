import { ContentHome, DescriptionPost, HeaderPost, PaginationPost, Post} from "./styles";
import { ContainerDefault } from "../../styles/styles";
import axios from "axios";
import { useQuery } from "react-query";
import { PostProps } from "../../types/PostProps";
import { Link } from "react-router-dom";
import { SearchInput } from "../../componets/SearchInput";
import { useEffect, useState } from "react";
import { Button, Heading, Text } from "@bruno-gom-ignite-ui/react";
import { Header } from "../../componets/Header";
import { Loading } from "../../componets/Loading";





export function Home(){

        const [postList,setListPost]=useState<PostProps[] | undefined>([])

        const [currentPage,setCurrentPage]= useState<number>(1)
        
        const limit = 10
        const {data:posts,error,isLoading,isFetching} = useQuery({
            queryKey:['posts',currentPage,setCurrentPage], 
            queryFn:async()=>{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`)
                return response
        },
            keepPreviousData:true,
            staleTime:30000
        })

        const totalPages= Math.ceil(Number(posts?.headers['x-total-count'])/limit)
        
        if(error){
             alert(error);
        }

        function filterPostList(query?:string){
            const queryLowerCase = query?.toLowerCase()
          const refreshPost = posts?.data?.filter((post: { title: string | string[]; })=>queryLowerCase?post.title.includes(queryLowerCase):posts?.data)
            if(query===undefined) setListPost(posts?.data)
            setListPost(refreshPost)
        }
        
        useEffect(()=>{
            setListPost(posts?.data)
        },[posts?.data])
        if(postList?.length===0){
            return(
                <>  
                <Header/>
                <ContainerDefault>
                    <SearchInput placeholder="Procurar um post" callback={filterPostList}/>
                    
                    <PaginationPost>
                            <Button 
                                onClick={()=>{
                                    setCurrentPage(old=> Math.max(old-1,0))}} disabled={currentPage===1}>
                                        Previous page
                            </Button>
                        <Button  
                            onClick={()=>{
                                setCurrentPage(old=>old + 1)                            
                            }}
                            disabled={currentPage === totalPages}>
                            Next page
                        </Button>
                    </PaginationPost>
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
            
            <PaginationPost>
                    <Button 
                        onClick={()=>{
                            setCurrentPage(old=> Math.max(old-1,0))}} disabled={currentPage===1}>
                                Pagina anterior
                    </Button>
                    <Text>
                        Página {currentPage} de {totalPages}
                    </Text>
                <Button  
                    onClick={()=>{
                        setCurrentPage(old=>old + 1)                            
                    }}
                    disabled={currentPage === totalPages}>
                    Próima pagina
                </Button>
            </PaginationPost>
            <ContentHome>
            {postList?.map(post=>{
                return(
                    <>
                        {
                            
                            isLoading || isFetching?(
                                <Post>
                                    <HeaderPost>
                                       <Loading/>
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