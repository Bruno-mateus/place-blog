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

export function Users(){
    const [userList,setUserList]=useState<UserProps[] | undefined>([])

    
    const {data:users,error,isLoading} = useQuery<UserProps[] | undefined>('users',async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return response.data
    })

    function filterUser(query?:string){
        const refreshUserList = users?.filter(user=>query?user.email.includes(query)||user.name.includes(query):users)
          if(query===undefined) setUserList(users)
          setUserList(refreshUserList)
          console.log(refreshUserList)
      }

    useEffect(()=>{
        setUserList(users)
    },[users])

    return(
    <>
        <Header/>
        <ContainerDefault>
            <SearchInput placeholder="Digite um nome ou email" callback={filterUser} buttonTitle="Procurar"/>
            <UsersListContainer>
                
            {
                userList?.map(user=>{
                    return(
                    <Link to={`/user/${user.id}`}>
                        <UserBox key={user.id}>
                            <Text size={'md'}> <span>Nome:{' '}</span>{user.name}</Text>
                            <Text size={'md'}> <span>Email:{' '}</span> {user.email}</Text>
                            <Text size={'md'}><span>Companhia:{' '}</span> {user.company.name}</Text>
                        </UserBox>
                    </Link>

                    )
                })
            }

            </UsersListContainer>
            
        </ContainerDefault>

    </>
    )
}