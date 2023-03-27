import { Box } from "@bruno-gom-ignite-ui/react";
import { styled } from "../../styles/styles";

export const UsersListContainer = styled('main',{
    marginTop:'2rem',
    display:"grid",
    padding:'1rem',
    gridTemplateColumns:'1fr 1fr',
    gap:'1rem',
    '@media (max-width:760px)':{
        gridTemplateColumns:'1fr',
        padding:'0 1rem'
    }
})

export const UserBox= styled(Box,{
    textAlign:"left",
    padding:'1rem',
    width:'100%',
    margin:'auto',
    span:{
        color:'$ignite500'
    },
    "&:hover":{
        transform:'scale(1.01)',
        boxShadow:' inset 0px  0px 5px #00B37E',
        color:'#fff',
        span:{
            color:'$ignite300'
        }
       }
})