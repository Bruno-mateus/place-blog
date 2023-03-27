import { Button, Heading } from "@bruno-gom-ignite-ui/react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header(){
    return(
        <HeaderContainer>
            <Link to='/'>
                <Heading draggable><span>{'<'}</span>Place <span>Blog</span>{'/>'}</Heading>
            </Link>
            
            <Link to="/users">
                <Button>Listar Usuários</Button>
            </Link>
        </HeaderContainer>
    )
}