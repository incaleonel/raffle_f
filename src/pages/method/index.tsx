import { Button, Container } from '@mui/material'
import { CSSProperties } from '@mui/material/styles/createMixins';
import Image from 'next/image';
import Link from 'next/link';


const buttonStyles: CSSProperties = {
  fontSize: '16px', // Cambia el tamaño de la fuente
  backgroundColor: '#fff',
  display:'flex',
  flexDirection:'column',
  width: '100%',
  color: 'rgba(255, 155, 24, 0.999)',
  fontWeight:'700', 
  '&:hover': {
    backgroundColor: 'transparent', // Quita el efecto hover
  },
};
export default function Init() {

  return (

    <Container maxWidth='md'>

      <h1 className='title tracking-in-expand-forward-top'>Elige un metodo de pago</h1>
      <div className='group-buttons'>
        <Link className='link' href="/method/mercadopago">
          <Button style={buttonStyles} className='slide-right' variant='contained'>
            <Image  className='iconButton ' width={200} height={200} src='/mp.png' alt='icono de transferencia' />
            Mercadopago
          </Button>
        </Link>
        <Link className='link' href="/method/transference">
          <Button style={buttonStyles} className='slide-left' variant='contained' >
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
