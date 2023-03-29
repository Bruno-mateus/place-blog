import { SpinnerCircular } from "spinners-react";
import { LoadingContent } from "./stlyles";

export function Loading(){
    return(
        <LoadingContent>
            <SpinnerCircular/>
        </LoadingContent>
    )
}