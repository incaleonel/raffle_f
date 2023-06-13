import TableRaffle from '../../components/TableRaffle';
import RaffleForm from '../../components/RaffleForm';
import { Container } from '@mui/material';

export default function Mercadopago(){
  
  return (
    <Container maxWidth='md' sx={{py:3}}>
      <TableRaffle/>
      <RaffleForm receipt={false}/>
    </Container>
  );
};