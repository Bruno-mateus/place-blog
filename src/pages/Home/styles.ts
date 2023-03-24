import { Box,Text } from "@bruno-gom-ignite-ui/react";
import { styled } from "../../styles/styles";

export const ContainerHome = styled('div',{
    maxWidth:980,
    height:'100%',
    margin:'auto',
    padding:'1rem'
})

export const SearchBox = styled('div',{
    display:"flex",
    height:60
})

export const SearchInput = styled('input',{
    width:'100%',
    height:'100%',  
    padding: '1rem',
    backgroundColor:"$gray800",
    borderRadius:'8px 0px 0px 8px ',
    border:'none',
    fontSize:'small',
    color:"$gray100",
    outline:'none',
    '&:focus':{
        boxShadow:' inset 0px  0px 5px #00875F'
    }
})

export const ButtonSearch= styled('button',{
    borderRadius:'0 8px 8px 0 ',
    height:'100%',
    padding: '1rem',
    backgroundColor:"$ignite500",
    color:'#fff',
    fontSize:'small',
    border:"none",
    cursor:'pointer',
    '&:hover':{
        backgroundColor:'$ignite300',
    }
})

export const ContentHome = styled('main',{
    display:'grid',
    gridTemplateColumns:'1fr 1fr',
    marginTop:'2rem',
    gap:'.75rem'
})

export const Post = styled(Box,{})

export const DescriptionPost = styled(Text,{
   color:"$gray200",
   overflow: 'hidden',
   display: '-webkit-box',
   '-webkit-line-clamp': 6,
   '-webkit-box-orient': 'vertical',
   'text-overflow': 'ellipsis',
})