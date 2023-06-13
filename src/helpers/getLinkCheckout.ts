import axios from 'axios';

interface Product{
  title:string,
  description: string,
  price:number,
  units:number
}

export const getLinkCheckout = async(tickets:number)=>{
    
    try{
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/checkout`
        const product:Product = {
            title:'Rifa',
            description: 'Rifa del sorteo de SHfiguarts dbs.argentina',
            price: 3000,
            units: tickets
        }
       const res= await axios.post(url,{product});  
       return res.data;
    }catch{
       return 'not found';
    }
    
     
}

