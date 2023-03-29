import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ContainerDefault } from '../../styles/styles';
import { CommentContainer, PagePostContent, PostContent } from './styles';
import { useQuery } from "react-query";
import { PostProps } from '../../types/PostProps';
import { Heading, Text } from '@bruno-gom-ignite-ui/react';
import { Comment } from '../../componets/Comment';
import { CommentProps } from '../../types/CommentProps';
import { Header } from '../../componets/Header';
import { Loading } from '../../componets/Loading';

export function PagePost(){
    const {id} = useParams()
   

    const {data:post, error,isLoading,isFetching} = useQuery<PostProps>('post', async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data
    })

    const {data:comments,isLoading:isLoadingComments,isFetching:isFetchingComments} = useQuery<CommentProps[]>('comments', async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response.data
    })
    if(error){
        alert(error)
    }

    return (
    <>
        <Header/>
        <ContainerDefault>
        
            <PagePostContent>
                {
                    isLoadingComments || isFetchingComments?(
                        <Heading><Loading/></Heading>
                    ):(

                        <>
                            <Heading>{post?.title}</Heading>
                            <PostContent>                    
                                <Text size={'sm'}>{post?.email}</Text>
                                <Text>{post?.body}</Text>                                  
                            </PostContent>
                        </>
                )
                       

                }
                

            </PagePostContent>
            <CommentContainer>
                <header><Heading>Comentários</Heading> <Text>{comments?.length}</Text></header>                
                {
                    isFetching || isLoading?(
                        <Loading/>
                    ):(
                        
                        comments?.map(comment =>{
                            return(
                                <Comment key={comment.id} title={comment.name} author={comment.email} body={comment.body}/>
                            )
                        })
                    )
                }
            </CommentContainer>
       </ContainerDefault>
    </>
        
     
    )
}