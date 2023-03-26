import { Text } from "@bruno-gom-ignite-ui/react";
import { Link } from "react-router-dom";
import { CommentBox } from "./styles";

interface CommentProps{
    body:string
    author:string
    title:string
}

export function Comment({title,body,author}:CommentProps){
    return(
        <CommentBox>
                <Text size={"md"}>{title}</Text>  
                <Text size={"sm"}>{author}</Text>    
                <Text size={"lg"}>{body}</Text>
        </CommentBox>
    )
}


