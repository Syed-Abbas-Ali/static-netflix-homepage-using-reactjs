import React from 'react'
import "./Hero.css"
import Navbar from "../Navbar/Navbar"

const Hero = () => {
  return (
    <div className='hero'>
        <Navbar></Navbar>
        <div className='hero-middle'>
            <div className='hero-middle-heading'>
                <h1>Unlimited Movies, TV Shows and more.</h1>
            </div>

            <div className='hero-middle-para1'>
                <p>Watch wherever you want. Cancel whenever you want.</p>
            </div>

            <div className='hero-middle-para2'>
                <p>Ready to watch? Enter your email address to create or restart your membership.</p>
            </div>

            <div className='hero-middle-email'>
                <input type="email" placeholder="Enter Your Email"></input>
                <button type="submit">Get Started<span><img src='./images/arrow.jpg' className='arrow'></img></span></button>
            </div>
        </div>
    </div>
  )
}

export default Hero