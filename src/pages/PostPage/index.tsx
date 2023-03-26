import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ContainerDefault } from '../../styles/styles';
import { CommentContainer, PagePostContent, PostContent } from './styles';
import { useQuery } from "react-query";
import { PostProps } from '../../types/PostProps';
import { Heading, Text } from '@bruno-gom-ignite-ui/react';
import { Comment } from '../../componets/Comment';
import { CommentProps } from '../../types/CommentProps';

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
        <ContainerDefault>
            <PagePostContent>
                <Heading>{post?.title}</Heading>
                <PostContent>
                    <Text>{post?.body}</Text>
                </PostContent>
            </PagePostContent>
            <CommentContainer>
                <header><Heading>Comentários</Heading> <Text>{comments?.length}</Text></header>                
                {
                    comments?.map(comment =>{
                        return(
                            <Comment key={comment.id} author={comment.email} body={comment.body}/>
                        )
                    })
                }
            </CommentContainer>
       </ContainerDefault>
     
    )
}