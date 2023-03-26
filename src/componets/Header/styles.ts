import { styled } from "../../styles/styles";

export const HeaderContainer = styled('header',{
    backgroundColor: '$gray800',
    padding:'1rem',
    h2:{
        display:'inline',
        textAlign: 'center',
        cursor: 'pointer',
        span:{
            color: '$ignite500'
        }
    }
})