
import { Container, Button } from '@mui/material'

import Init from '@/components/Init';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '../redux/store';
import Transference from '@/components/Transference';
export default function Home() {
  const tabs = useAppSelector((state:RootState)=>state.tab.tabs)
  console.log(tabs)
  return (
    

    <Container maxWidth='md' className='payment-method shadow-drop-center' >

      {tabs.init && <Init/>}
      {tabs.transference && <Transference/>}

    </Container>

  )
}
