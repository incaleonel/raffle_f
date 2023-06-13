import { Button, Container } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
export default function Init() {

  /* const dispatch = useAppDispatch(); */
  return (

    <Container maxWidth='md'>

      <h1 className='title tracking-in-expand-forward-top'>Elige un metodo de pago</h1>
      <div className='group-buttons'>
        <Link className='link' href="/method/mercadopago">
          <Button className='buttonp slide-right' color='info' variant='contained'>
            <Image  className='iconButton ' width={200} height={200} src='/mp.png' alt='icono de transferencia' />
            Mercadopago
          </Button>
        </Link>
        <Link className='link' href="/method/transference">
          <Button className='buttonp slide-left' color='info'variant='contained' /* onClick={()=>dispatch(setTab('transference'))} */>
            <div className='iconButton '>

              <Image className='transfer-icon' width={200} height={200} src='/transfer.png' alt='icono de transferencia'  />
            </div>
            Transferencia
          </Button>
        </Link>
      </div>

    </Container >

  )
}
