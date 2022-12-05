import React from 'react'
import "./animate.css";
import { useState,useEffect } from 'react';

const Animate = () => {

    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count<1200 ?count+1:count=1);
      console.log(count)
    }, 5);
    setTimeout(() => {

      setCounter((counter) =>count>=600?counter+1:counter=0);
      console.log(count)
    }, 5);
  });

    const prog={
        background : `conic-gradient(#0047ab ${counter}deg,transparent 0deg)`
    }
  return (
    <div className='Look'>
    <div className='Look-left'>
    <img src='./images/image.jpg' alt='tv frame'></img>
    <div className='slide'>
        <div className='b1'>
            <div className='imgs'>
            <img src='./images/boxshot.png' alt='img'></img>
            </div>
            
            <div className='txt'>
                <h2>Stranger Things</h2>
                <h3>Downloading...</h3>
            </div>
        </div>
        <div  className={count>=325 && count<950 ? "shadow":"nn"} >
        <div  className={count>=330 && count<950 ? "circ":"anim"} >
        <div className={count>=1 && count<270 ? "bb1":"prog1"}><img src='./images/download.png' alt=''></img></div>
        <div className={count>=600 && count<960? "bb":"prog2"} style={prog}></div>
        <div className={count>=965 && count<1200 ? "bb3":"prog3"}><img src='./images/checkbox.png' alt=''/></div>
        </div>
        </div>
    </div>
</div>
<div className='Look-right'>
    <h1>Download your shows to watch offline.
</h1>
    <h2>Save your favourites easily and always have something to watch.</h2>
</div>
</div>
  )
}

export default Animate