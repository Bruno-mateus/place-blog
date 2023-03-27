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
import { SpinnerCircular } from 'spinners-react';

export function PagePost(){
    const {id} = useParams()
   

    const {data:post, error,isLoading} = useQuery<PostProps>('post', async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data
    })

    const {data:comments} = useQuery<CommentProps[]>('comments', async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        return response.data
    })


    return (
    <>
        <Header/>
        <ContainerDefault>
            <PagePostContent>
                <Heading>{post?.title}</Heading>
                <PostContent>
                    {
                        isLoading?(
                            <SpinnerCircular/>
                        ):(
                            <>
                            <Text size={'sm'}>{post?.email}</Text>
                            <Text>{post?.body}</Text>
                            </>
                        )
                    }
                </PostContent>
            </PagePostContent>
            <CommentContainer>
                <header><Heading>Comentários</Heading> <Text>{comments?.length}</Text></header>                
                {
                    comments?.map(comment =>{
                        return(
                            <Comment key={comment.id} title={comment.name} author={comment.email} body={comment.body}/>
                        )
                    })
                }
            </CommentContainer>
       </ContainerDefault>
    </>
        
     
    )
}