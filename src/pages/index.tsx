
import { Container } from '@mui/material'
import RaffleForm from '../components/RaffleForm'
import * as React from 'react';
import { Provider } from 'react-redux';
import  store from '../redux/store';
import TableRaffle from '../components/TableRaffle';


export default function Home() {
  
  return (
    <Provider store={store}>

      <Container maxWidth="md"  >
        <TableRaffle/>
        <RaffleForm />
      </Container>

    </Provider>
  )
}
