export interface UserProps{
    id: string;
    name: string;
    email: string;
    address:{
        street: string;
        city: string;
    }
    website:string;
    company:{
        name: string;
    }
}