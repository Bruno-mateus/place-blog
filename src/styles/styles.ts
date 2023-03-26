import { createStitches } from "@stitches/react";
import {colors} from '@bruno-gom-ignite-ui/tokens'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
}= createStitches({
    theme:{
        default:{
        }
    },
})

export const ContainerDefault = styled('div',{
    maxWidth:864,
    height:'100%',
    margin:'auto',
    padding:'1rem',
})
