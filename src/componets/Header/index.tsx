import { Heading } from "@bruno-gom-ignite-ui/react";
import { HeaderContainer } from "./styles";

export function Header(){
    return(
        <HeaderContainer>
            <Heading onClick={()=>location.href='/'}><span>{'<'}</span>Lorem <span>Blog</span>{'/>'}</Heading>
        </HeaderContainer>
    )
}