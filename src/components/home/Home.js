import React from 'react'
import Hero from '../section 1/Hero'
import Funtv from '../section 2/images/Funtv'
import Movies from "../movies/Movies"
import Animate from '../Animation/Animate'
import Look from "../section 5/images/Look"
import Kids from "../section 6/Kids"
import Faq from "../faq/Faq"
// import Questions from "../faq/Questions"
import Footer from "../footer/Footer"
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
        <Hero></Hero>
        <Funtv></Funtv>
        <Movies></Movies>
        <Animate></Animate>
        <Look></Look>
        <Kids></Kids>
        <Faq></Faq>
        {/* <Questions></Questions> */}
        <Footer></Footer>
    </div>
  )
}

export default Home