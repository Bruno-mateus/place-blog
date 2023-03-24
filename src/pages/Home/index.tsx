import { ButtonSearch, ContainerHome, ContentHome, DescriptionPost, HeaderPost, Post, SearchBox, SearchInput } from "./styles";
import { Heading} from "@bruno-gom-ignite-ui/react";
import {useContextSelector} from 'use-context-selector';
import { PostContext } from "../../contexts/PostContext";





export function Home(){

    const {posts,isLoading,error} = useContextSelector(
        PostContext,
        (ctx)=>ctx
        )



        if(error){
            return alert(error);
        }

        

    return(
        <ContainerHome>
            <SearchBox>
                <SearchInput placeholder="Pesquise um post"/>
                <ButtonSearch>Pesquisar</ButtonSearch>
            </SearchBox>
            <ContentHome>
            {posts.map(post=>{
                return(
                <Post key={post.id}>
                    <HeaderPost>{post.title}</HeaderPost>
                    <DescriptionPost size={'sm'}>{post.body}</DescriptionPost>
                </Post>
                )
            })}
                
            </ContentHome>
        </ContainerHome>
    )
}