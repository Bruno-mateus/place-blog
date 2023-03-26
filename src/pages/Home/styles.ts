import { Box,Heading,Text } from "@bruno-gom-ignite-ui/react";
import { styled } from "../../styles/styles";


export const SearchBox = styled('div',{
    display:"flex",
    height:60,
})

export const SearchInput = styled('input',{
    width:'100%',
    padding: '0 1rem',
    backgroundColor:"$gray800",
    borderRadius:'8px 0px 0px 8px ',
    border:'none',
    fontSize:'medium',
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
    width:'100%',
    justifyContent: 'center',
    alignItems :'center',
    marginTop:'2rem',
    gap:'1rem',
    padding:'1rem 0',
    '@media (max-width:768px)': {
        gridTemplateColumns:' 1fr',  
        padding:"1rem"
    }
})


export const Post = styled(Box,{
    display: 'flex',
    flexDirection: 'column',
    gap: '.75rem',
    transition:"ease-in 100ms",
    cursor:'pointer',
    "&:hover":{
        transform:'scale(1.01)',
        boxShadow:' inset 0px  0px 5px #00B37E',
        color:'#fff',
        h2:{
            color:'$ignite300'
        }
       }
})

export const HeaderPost = styled(Heading,{   
    color:"$ignite500",
    textAlign:"center",
   overflow: 'hidden',
   display: '-webkit-box',
   '-webkit-line-clamp': 1,
   '-webkit-box-orient': 'vertical',
   'text-overflow': 'ellipsis',
   
})

export const DescriptionPost = styled(Text,{
   color:"$gray200",
   overflow: 'hidden',
   display: '-webkit-box',
   '-webkit-line-clamp': 2,
   '-webkit-box-orient': 'vertical',
   'text-overflow': 'ellipsis',
})