import { Box } from "@bruno-gom-ignite-ui/react";
import { styled } from "../../styles/styles";

export const PagePostContent = styled('main',{
    marginTop:'1rem',
    h2:{
        textAlign: 'center',
    }
})

export const PostContent = styled(Box,{
    width: '90%',
    padding:'1rem',
    margin:'1rem auto 0',
    
})

export const CommentContainer = styled('section',{
    
    header:{
        backgroundColor:'$ignite900',
        borderRadius:10,
        padding:'.5rem 1rem',
    },
    width:'80%',
    margin:'3rem auto 0',
    padding:'1rem 0'
})