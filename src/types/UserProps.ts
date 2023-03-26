export interface UserProps{
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