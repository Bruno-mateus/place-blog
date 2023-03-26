import { Box } from "@bruno-gom-ignite-ui/react";
import { styled } from "@stitches/react";

export const CommentBox = styled(Box,{
    marginTop:'1rem',
    padding:'.5rem 1rem',
    'p:nth-child(1)':{
      color:'$ignite300'
    },
    'p:nth-child(2)':{
      color:'$gray200'
    }
  })