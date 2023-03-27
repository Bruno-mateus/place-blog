import { Text } from "@bruno-gom-ignite-ui/react"
import axios from "axios"
import { User } from "phosphor-react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { SpinnerCircular } from "spinners-react"
import { Header } from "../../componets/Header"
import { ContainerDefault } from "../../styles/styles"
import { UserProps } from "../../types/UserProps"
import { UserAvatar, UserContainer, UserContent } from "./styles"

export function UserProfile(){
    const {id} = useParams()
    const {data:user,isLoading,error,isFetching} = useQuery<UserProps>('user',async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        return response.data
    })
    if(error){
        alert(error)
    }

    return (
        <>
        <Header/>
        <ContainerDefault>
            
            <UserContainer>
                <UserAvatar>
                 <User size={22} color='#fff'/>
                </UserAvatar>
                <UserContent>
                    {
                        isLoading || isFetching?(
                            <SpinnerCircular/>
                        ):(
                        <ul>
                            <li><Text size={'sm'}><span>Nome:</span></Text>{' '}<Text size={'sm'}>{user?.name}</Text></li>
                            <li><Text size={'sm'}><span>Email:</span></Text>{' '}<Text size={'sm'}>{user?.email}</Text></li>
                            <li><Text size={'sm'}><span>Cidade:</span></Text>{' '}<Text size={'sm'}>{user?.address.city}</Text></li>
                            <li><Text size={'sm'}><span>Rua:</span></Text>{' '}<Text size={'sm'}>{user?.address.street}</Text></li>
                            <li><Text size={'sm'}><span>Website:</span></Text>{' '}<Text size={'sm'}>{user?.website}</Text></li>
                            <li><Text size={'sm'}><span>Companhia:</span></Text>{' '}<Text size={'sm'}>{user?.company.name}</Text></li>
                        </ul>
                        )
                    }
                </UserContent>
            </UserContainer>
        </ContainerDefault>
        </>

    )
}