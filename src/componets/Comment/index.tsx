import { Text } from "@bruno-gom-ignite-ui/react";
import { Link } from "react-router-dom";
import { CommentBox } from "./styles";

interface CommentProps{
    body:string
    author:string
}

export function Comment({body,author}:CommentProps){
    return(
        <CommentBox>
            <Link to='/'><Text size={"sm"}>{author}</Text></Link>
                
                <Text size={"md"}>{body}</Text>
        </CommentBox>
    )
}


