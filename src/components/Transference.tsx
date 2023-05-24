import RaffleForm from '@/components/RaffleForm';
import TableRaffle from '@/components/TableRaffle';
import Container from '@mui/material/Container';
 
function Transference() {
    return (

        

        <Container maxWidth="md" >
            <h1 className='title'>Elige tu rifa</h1>
            <TableRaffle />
            <RaffleForm />

        </Container>
        
    );
}

export default Transference;