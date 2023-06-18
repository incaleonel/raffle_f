


import Link from 'next/link';
import {Button, Box} from '@mui/material';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const M = require('materialize-css/dist/js/materialize.min.js')
    M.AutoInit();
  }, []);
  
  
  return (

    <div>
      <h1 className='title'>Premios</h1>
      <div className="carousel">
        <a className="carousel-item" href="#one!" ><Image alt="toy" width={900} height={900} className='img' src="/gohan.jpg" priority/></a>
        <a className="carousel-item" href="#two!" ><Image alt="toy" width={900} height={900} className='img' src="/goku.jpg" priority/></a>
        <a className="carousel-item" href="#three!" ><Image alt="toy" width={900} height={900} className='img' src="/piccolo.jpg" priority/></a>
      </div>
      
      <Box sx={{width:'100%', display:'flex', justifyContent:'center'}}>
        <Link href="/method">
        <Button variant="contained"
               color='primary'sx={{ my: 2, mx:'auto'}}>
          PARTICIPAR
        </Button>
        </Link>
      </Box>
      

    </div>

  )
}
