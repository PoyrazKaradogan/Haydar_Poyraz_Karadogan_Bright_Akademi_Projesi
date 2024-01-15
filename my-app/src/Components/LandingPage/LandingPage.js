import React from 'react'
import './LandingPage.css'
import Video from '../../Media/poyraz.mp4'
import {  } from "../../Pages/About/About"

const LandingPage = () => {
  return (
    <div className='LandingPage'>

      <video src={Video} autoPlay muted loop class="video-bg" />
      <div className='bg-overlay'></div>
<div className='home-text'>
<h1 className='text-white text-center mt-0'>Üniversite onaylı sertifikanı al, lider bilişimci ol.</h1>
<h3 className='text-white'>Detaylı bilgi için:</h3> <a className='text-primary' href="">0212 381 50 00</a>
<button className='btn btn-outline-primary fs-3 d-flex m-2'href="/About">Detaylı Bilgi</button >
<button className='btn btn-outline-danger fs-3 d-flex m-2'href="/Contact">İletişim</button>
</div>

    </div>
    


  )


}

export default LandingPage