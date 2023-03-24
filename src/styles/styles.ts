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
        colors:{
            ...colors
        }
    }
})