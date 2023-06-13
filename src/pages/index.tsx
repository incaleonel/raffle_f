


import Link from 'next/link';
import Button from '@mui/material/Button'
import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

export default function Home() {
  useEffect(() => {
    const M = require('materialize-css/dist/js/materialize.min.js')
    M.AutoInit();
  }, []);
  
  
  return (

    <>
      <h1 className='title'>Premios</h1>
      <div className="carousel">
        <a className="carousel-item" href="#one!" ><img src="https://bbts1.azureedge.net/images/p/full/2021/12/42d85f0f-0609-4756-a198-093f64dac3d3.jpg" /></a>
        <a className="carousel-item" href="#two!" ><img src="https://store.crunchyroll.com/on/demandware.static/-/Sites-crunchyroll-master-catalog/default/dwfeffb771/images/1282031222828-9-bluefin-figma-articulated-figures-majin-buu-evil-s-h-figuarts-dragon-ball-z-28670588911660.jpg" /></a>
        <a className="carousel-item" href="#three!" ><img src="https://es.dragon-ball-official.com/dragonball/jp/news/2023/03/SHF_ANDROID%2019_01_2.jpg?_=1686259560" /></a>
        <a className="carousel-item" href="#four!" ><img src="https://cdn.shopify.com/s/files/1/0590/8312/9014/products/2_76c03a4d-351e-4178-ab1b-6d1651213e0b_580x.jpg?v=1665084869" /></a>
        <a className="carousel-item" href="#five!" ><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMEx5zOqBUo5j31NadsXjDK-SOrHCypQLHtgzoguoUeeFwWvIB5lzKNBvMfrVhwS7BlkEr78xK94lVs33R434UPLQDqAv1oQQX0dlr9DpydZsLlQg6j1WsUBYEJHFHl-mH4t3sG8QKScNIgJ0UVZ4k_wTs-U9h5nsGSq-aZt17Ncite1Q-3d8N3uaKBQ/s1200/1.jpg" /></a>
      </div>
      
      
      <Link href="/method" >
        <Button variant="contained" 
               color='primary'sx={{ my: 2, mx:'auto'}}>
          PARTICIPAR
        </Button>
      </Link>

    </>

  )
}
