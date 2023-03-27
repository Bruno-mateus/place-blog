import { Heading, Text } from "@bruno-gom-ignite-ui/react";
import axios from "axios";
import {  useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Header } from "../../componets/Header";
import { SearchInput } from "../../componets/SearchInput";
import { ContainerDefault } from "../../styles/styles";
import { UserProps } from "../../types/UserProps";
import { UserBox, UsersListContainer } from "./styles";
import { SpinnerCircular } from "spinners-react"


export function Users(){
    const [userList,setUserList]=useState<UserProps[] | undefined>([])

    
    const {data:users,error,isLoading,isFetching} = useQuery<UserProps[] | undefined>('users',async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return response.data
    })

    if(error){
        alert(error)
    }

    function filterUser(query?:string){
        let words = query?.split(" ");
        //@ts-ignore
        for (let i = 0; i < words.length; i++) {
        //@ts-ignore
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        //@ts-ignore
        let queryCapitalized = words.join(" ");

        const refreshUserList = users?.filter(user=>query?user.email.includes(queryCapitalized)||user.name.includes(queryCapitalized):users)
          if(query===undefined) setUserList(users)
          setUserList(refreshUserList)
          console.log(refreshUserList)
      }
      

    useEffect(()=>{
        setUserList(users)
    },[users])

    if(userList?.length===0){
        return(
            <>
                 <Header/>
            {
                isLoading || isFetching?(
                    <ContainerDefault>
                        <SearchInput placeholder="Digite um nome ou email" callback={filterUser} buttonTitle="Procurar"/>
                        <UsersListContainer>
                            <SpinnerCircular/>    
                        </UsersListContainer>                      
                    </ContainerDefault>
                    
                ):(
                
                   
                    <ContainerDefault>
                        <SearchInput placeholder="Digite um nome ou email" callback={filterUser} buttonTitle="Procurar"/>
                        <Heading size={'lg'}>Nenhum usuário encontrado.</Heading> 
                    </ContainerDefault>
               
                )
                
            }
                
            </>)
        
    }


    return(
    <>
        <Header/>
        <ContainerDefault>
            <SearchInput placeholder="Digite um nome ou email" callback={filterUser} buttonTitle="Procurar"/>
            <UsersListContainer>
                
            {
                isLoading || isFetching?(
                    <UserBox>
                        <SpinnerCircular/>
                    </UserBox>
                    
                ):(
                    userList?.map(user=>{
                        return(
                        <Link key={user.id} to={`/user/${user.id}`}>
                            <UserBox>
                                <Text size={'md'}> <span>Nome:{' '}</span>{user.name}</Text>
                                <Text size={'md'}> <span>Email:{' '}</span> {user.email}</Text>
                                <Text size={'md'}><span>Companhia:{' '}</span> {user.company.name}</Text>
                            </UserBox>
                        </Link>
    
                        )
                    })
                )
            }

            </UsersListContainer>
            
        </ContainerDefault>

    </>
    )
}