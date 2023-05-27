
import { Container, Box } from '@mui/material'
import Init from '@/components/Init';
import { useAppSelector } from '@/redux/hooks';
import { RootState } from '../redux/store';
import Transference from '@/components/Transference';
export default function Home() {
  const tabs = useAppSelector((state: RootState) => state.tab.tabs)
  console.log(tabs)
  return (

    <Box sx={{minHeight:'100vh', py:5, display:'flex', alignItems:'center'}}>

      <Container maxWidth='md' className='box shadow-drop-center' >

        {tabs.init && <Init />}
        {tabs.transference && <Transference />}

      </Container>
    </Box>

  )
}
