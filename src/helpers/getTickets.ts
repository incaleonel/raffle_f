
 const getTickets = async() =>{
    const url = 'http://192.168.0.102:3001/api/rifas'
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

export default getTickets;