import { Container, Grid, Skeleton } from "@mui/material";
import Number from './Number';
import {useEffect} from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { ticketsReset, ticketsSelected } from '../redux/selectSlice';
import { RootState } from "@/redux/store";
import {Ticket, getTickets}  from "../helpers/getTickets";


  
export default function TableRaffle() {
  const tickets = useAppSelector((state:RootState)=> state.selected.tickets);
  const listNumber = useAppSelector((state:RootState)=> state.selected.listNumber);

  const dispatch = useAppDispatch();
  useEffect(() => {

    getTickets().then((list) => {
      dispatch(ticketsReset(list));
    })
    
    console.log('entro en useeffect')
  }, [])
  
  const dropTickets = (numbers:Ticket[])=> {
    if (numbers.length)
      return numbers.map(e =>
        <Grid item key={e.number} className='item-grid'>
          <div className='jello-vertical' onClick={() => 
          {if(e.status==='disponible')
            dispatch(ticketsSelected(e.number))}}>
            <Number value={e.number} status={e.status} />
          </div>

        </Grid>
      )
            
    return <Skeleton  sx={{bgcolor:'grey.400', height:200,width:500}} />
  }
    return (
        
        <>
            <Container maxWidth="sm" sx={{ mb:3}}>
                <Grid container sx={{justifyContent:'center'}}>
                    {dropTickets(listNumber)}
                </Grid>
            </Container>

            <Container  maxWidth="sm">
                <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', paddingBottom:2}}>

                    {
                        tickets.map(num_ticket =>
                            <Grid item key={num_ticket}>
                                <div className='container-image rotate-scale-up-diagonal-left'>
                                    <img className='image-ticket ' src="/ticket.png" alt="Ticket icon" width="100" height="100" />
                                    <div className='sello-ticket'>{num_ticket}</div>
                                </div>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </>
    );
}

