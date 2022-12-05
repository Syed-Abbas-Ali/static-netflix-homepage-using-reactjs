import React from 'react'
import "./Funtv.css"

const Funtv = () => {
  return (
    <div className='funtv'>
        <div className='funtv-right'>
            <h1>Have fun on your TV.</h1>
            <h2>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players as well as other devices.</h2>
        </div>
        <div className='funtv-left'>
            <img src='./images/tv.png' alt='tv frame'></img>
            <video  autoPlay loop muted>
  {/* <source src="./videos/tv.mp4" type="video/mp4" /> */}
  <source type="video/mp4" src="./videos/tv.mp4"></source>
         <source type="video/ogg" src="./videos/tv.mp4"></source>
  your browser notsupport this video
        </video>
        </div>


    </div>
  )
}

export default Funtv;