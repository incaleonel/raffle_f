import axios from "axios";

export interface Form{
    firstName: string,
    lastName:string,
    email:string,
    instagramUsername:string,
    tickets: number[],
    file?:File
}
export const sendForm = async(form:Form)=>{
    try{
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/raffles`, form);
    }catch(err){
        console.log('sendForm',err);
    }
}