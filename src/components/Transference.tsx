import RaffleForm from '@/components/RaffleForm';
import TableRaffle from '@/components/TableRaffle';
import Container from '@mui/material/Container';
 
function Transference() {
    return (

        

        <Container maxWidth='md' sx={{py:3}}>
            <h1 className='title tracking-in-contract'>Elige tu rifa</h1>
            <TableRaffle />
            <RaffleForm />

        </Container>
        
    );
}

export default Transference;