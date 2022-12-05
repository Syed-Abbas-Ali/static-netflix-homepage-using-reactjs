import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="./images/netflix.png" alt='logo'/>
        </div>

        <div className='box2'>
            {/* <div className='language'>
            <div id="google_translate_element"></div>
            </div> */}
            <div className='signin'>
            <div className='language'>
              <img src="./images/globe.png" alt="globe" className='globe'></img>
              <div id="google_translate_element" className='lang'></div>
            </div>
                <button>Sign In</button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar