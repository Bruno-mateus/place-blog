import { styled } from "../../styles/styles";

export const HeaderContainer = styled('header',{
    backgroundColor: '$gray800',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding:'1rem 2rem',
    h2:{
        display:'inline',
        textAlign: 'center',
        cursor: 'pointer',
        span:{
            color: '$ignite500'
        }
    }
})