import { ButtonSearch, ContainerHome, ContentHome, DescriptionPost, Post, SearchBox, SearchInput } from "./styles";
import { Heading,Text} from "@bruno-gom-ignite-ui/react";

interface PostProps{
    id:string
    title:string
    description:string
}

export function Home(){
    return(
        <ContainerHome>
            <SearchBox>
                <SearchInput placeholder="Pesquise um post"/>
                <ButtonSearch>Pesquisar</ButtonSearch>
            </SearchBox>
            <ContentHome>
                <Post>
                    <Heading>Post</Heading>
                    <DescriptionPost size={'sm'}>Description post</DescriptionPost>
                </Post>
                <Post>
                    <Heading>Post</Heading>
                    <DescriptionPost size={'sm'}>Description post</DescriptionPost>
                </Post>
            </ContentHome>
        </ContainerHome>
    )
}