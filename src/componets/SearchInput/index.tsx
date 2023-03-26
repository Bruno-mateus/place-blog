import { useState } from "react";
import { ButtonSearch, SearchBox, SearchInputContent } from "./styles";

export interface SearchInputProps{
    placeholder?: string;
    callback:(query?:string)=>void
    buttonTitle?: string
}


export function SearchInput({placeholder, callback,buttonTitle='pesquisar'}:SearchInputProps){

    const [inputValue,setInputValue] = useState<string>()

    function HandleInputValueChange(event:React.ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value);
     }

    return(
    <SearchBox>
        <SearchInputContent min={1} placeholder={placeholder} onChange={(event)=>HandleInputValueChange(event)}/>
        <ButtonSearch onClick={()=>callback(inputValue)}>{buttonTitle}</ButtonSearch>
    </SearchBox>
    )
}