
import Number from '../components/Number'
import Grid from '@mui/material/Grid'
import { Container } from '@mui/material'
import RaffleForm from '../components/RaffleForm'
import * as React from 'react';
import getTickets from '@/helpers/getTickets';

interface Ticket {
  number: number
  status: string
}

export default function Home() {
  const [listNumber, setListNumber] = React.useState<Ticket[]>([]);
  const [tickets, setTickets] = React.useState<number[]>([]);

  React.useEffect(() => {

    getTickets().then((list) => {
      setListNumber(list);
    })
  }, [])

  const ticketSelected = (num: number) => {

    if (tickets.includes(num))
      setTickets([...tickets.filter((e) => e !== num)])

    else
      setTickets([...tickets, num])

  }

  function dropTickets(numbers:Ticket[]) {
    if (numbers.length)
      return numbers.map(e =>
        <Grid item key={e.number} className='item-grid'>
          <div onClick={() => ticketSelected(e.number)}>
            <Number value={e.number} status={e.status} />
          </div>

        </Grid>
      )
    return <div>
              <h1>Hubo un problema al cargar las rifas</h1>
              <p>recargue la pagina</p>
          </div>
  }
  return (
    <>

      <Container maxWidth="md"  >
        <h1 className='title'>Elige tu rifa</h1>
        <Container maxWidth="sm" sx={{ justifyContent: 'center' }}>
          <Grid container >
            {dropTickets(listNumber)}
          </Grid>
        </Container>

        <Container sx={{ display: 'flex', justifyContent: 'center' }} maxWidth="sm">
          <Grid container spacing={1}>

            {
              tickets.map(num_ticket =>
                <Grid item key={num_ticket}>
                  <div className='container-image'>
                    <img className='image-ticket ' src="/ticket.png" alt="Ticket icon" width="100" height="100" />
                    <div className='sello-ticket'>{num_ticket}</div>
                  </div>
                </Grid>
              )
            }
          </Grid>
        </Container>
        <RaffleForm />
      </Container>

    </>
  )
}
