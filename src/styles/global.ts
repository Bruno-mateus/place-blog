import { globalCss } from "./styles";


export const globalStyles = globalCss({
    '*':{
        boxSizing:"border-box",
        padding:0,
        margin:0,
    },
    html:{
        scrollBehavior:'smooth'
    },
    body:{
        height:'100vh',
        backgroundColor:"$gray900",
        color:'$gray100'
    },
    '#root':{
        height:'100vh'
    }
})