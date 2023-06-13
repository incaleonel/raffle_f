import { Button, Container } from '@mui/material'
import Link from 'next/link';
export default function Init() {

  /* const dispatch = useAppDispatch(); */
  return (

    <Container maxWidth='md'>

      <h1 className='title tracking-in-expand-forward-top'>Elige un metodo de pago</h1>
      <div className='group-buttons'>
        <Link className='link' href="/method/mercadopago">
          <Button className='buttonp slide-right' variant='contained'/* onClick={()=>dispatch(setTab('mercadopago'))} */>
            <img className='iconButton' src='mp.png' alt='icono de transferencia' />
            Mercadopago
          </Button>
        </Link>
        <Link className='link' href="/method/transference">
          <Button className='buttonp slide-left' variant='contained' /* onClick={()=>dispatch(setTab('transference'))} */>
            <div className='iconButton'>

              <img src='transfer.png' alt='icono de transferencia' className='transfer-icon' />
            </div>
            Transferencia
          </Button>
        </Link>
      </div>

    </Container >

  )
}
