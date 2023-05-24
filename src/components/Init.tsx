import { Button } from '@mui/material'
import { useAppDispatch } from '@/redux/hooks';
import { setTab } from '../redux/tabSlice';
export default function Init() {
  
  const dispatch = useAppDispatch();
  return (

    <div className='status'>

      <h1 className='title tracking-in-expand'>Elige un metodo de pago</h1>
      <div className='group-buttons'>

        <Button className='button' variant='contained'>
          <img className='iconButton' src='mp.png' alt='icono de transferencia' />
          Mercadopago
        </Button>

        <Button className='button' variant='contained' onClick={()=>dispatch(setTab('transference'))}>
          <div className='iconButton'>
            <img src='transfer.png' alt='icono de transferencia' className='transfer-icon' />
          </div>
          Transferencia
        </Button>
      </div>

    </div>

  )
}
