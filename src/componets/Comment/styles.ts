import { Box } from "@bruno-gom-ignite-ui/react";
import { styled } from "@stitches/react";

export const CommentBox = styled(Box,{
    marginTop:'1rem',
    padding:'.5rem 1rem',
    a:{
      marginTop:10,
      textDecoration:'none',
      p:{
        color:'$ignite500',
        '&:hover':{
          color:'$ignite300',
        }
      }
    }
  })