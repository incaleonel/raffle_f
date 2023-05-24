    
export interface Ticket {
    number: number
    status: string
  }

export const getTickets = async() =>{
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/raffles`;
    
    try{
       const res = await fetch(url);
        console.log(res);
        const data = await res.json();

        return data; 
    }catch(err){
        console.log(err);
        return []
    }
    
}

