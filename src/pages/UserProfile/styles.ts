import { Box } from "@bruno-gom-ignite-ui/react";
import { styled } from "@stitches/react";

export const UserContainer = styled(Box,{
    margin:'auto',
    padding:'1rem',
    width:320,
    position:'relative',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'2rem'

})

export const UserContent  = styled('div',{
    display:'grid',
    marginTop:'1rem',
    gridTemplateColumns:'1fr',
    ul:{
        li:{
            listStyle: 'none',
            color:'$ignite100',
            display:'flex',
            span:{
                color:'$ignite500'
            },
            '&+li':{
                marginTop:'.8rem'
            }
        }
    }

})

export const UserAvatar = styled('div',{
    border:'2px solid $gray100',
    borderRadius:"50%",
    width:40,
    height:40,
    padding:'.5rem',
    backgroundColor:'$gray600',
    display:'inline-block',
    position:'absolute',
    top:-25,
})