import React from 'react'
import "./look.css"

const Look = () => {
  return (
    <div className='Look'>
    <div className='Look-right'>
        <h1>Look everywhere.</h1>
        <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV without paying extra.</h2>
    </div>
    <div className='Look-left'>
        <img src='./images/device.png' alt='tv frame' className='lookimg'></img>
        <video  loop autoPlay muted>
<source src="./videos/tv.mp4" type="video/mp4" />
your browser notsupport this video
    </video>
    </div>


</div>
  )
}

export default Look