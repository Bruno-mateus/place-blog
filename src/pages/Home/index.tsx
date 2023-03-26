import { ButtonSearch, ContentHome, DescriptionPost, HeaderPost, Post, SearchBox, SearchInput } from "./styles";
import { ContainerDefault } from "../../styles/styles";
import axios from "axios";
import { useQuery } from "react-query";
import { PostProps } from "../../types/PostProps";
import { Link } from "react-router-dom";





export function Home(){

        
        const {data:posts,error,isLoading} = useQuery<PostProps[]>('todos', async()=>{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            return response.data
        })

        

        if(error){
             alert(error);
        }



    return(
        <ContainerDefault>
            <SearchBox>
                <SearchInput placeholder="Pesquise um post"/>
                <ButtonSearch>Pesquisar</ButtonSearch>
            </SearchBox>
            <ContentHome>
            {posts?.map(post=>{
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
    )
}