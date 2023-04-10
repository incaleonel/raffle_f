
import { Inter } from 'next/font/google'
import Number from '../components/Number'
import Grid from '@mui/material/Grid'
import { Box, Container } from '@mui/material'
import RaffleForm from '../components/RaffleForm'


const listNumber = [
  {
    id: 1,
    status: "disponible"
  },
  {
    id: 2,
    status: "disponible"
  },
  {
    id: 3,
    status: "disponible"
  },
  {
    id: 4,
    status: "disponible"
  },
  {
    id: 5,
    status: "disponible"
  },
  {
    id: 6,
    status: "disponible"
  },
  {
    id: 7,
    status: "ocupado"
  },
  {
    id: 8,
    status: "ocupado"
  },
  {
    id: 9,
    status: "disponible"
  },
  {
    id: 10,
    status: "disponible"
  },
  {
    id: 11,
    status: "no-disponible"
  },
  {
    id: 12,
    status: "disponible"
  },
  {
    id: 13,
    status: "ocupado"
  },
  {
    id: 14,
    status: "disponible"
  },
  {
    id: 15,
    status: "disponible"
  },
]




export default function Home() {

  return (
    <>
    
    <Container maxWidth="md" sx={{ my:20}} >
      <h1 className='title'>Elige tu rifa</h1>
      <Container maxWidth="sm">
        
      <Grid container alignItems='center'>

        { listNumber.map(e => 
            <Grid item key={e.id} className='item-grid'>
              <Number value={e.id} status={e.status} />
            </Grid>
          )
        }
      </Grid>
      </Container>
      <img src="/ticket.svg" alt="Ticket icon" width="100" height="100" />
      <RaffleForm/>
    </Container>
    
    </>
    

  )
}
