import { styled } from "@stitches/react"

export const SearchBox = styled('div',{
    display:"flex",
    height:60,
})

export const SearchInputContent = styled('input',{
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
