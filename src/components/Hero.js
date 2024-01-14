import React from 'react'
import './hero.css'
import img1 from './imgimg.png'
const Hero = () => {
  return (
    <div className='heroo'>
        <div className='navv'>
            <img className='mainlogo' src={img1} />

            <h4 className='logotxt'> PostalFinder</h4>
            <div className='buttons'>

            {/* <div className='compo' >Home</div> */}
            <div className='compo' >Live Service Updates</div>
            <div className='compo' >Login/Register </div>
            </div>
        </div>
            {/* <div className='lowbuttons'>
              <button>sending a parcel</button>
              <button>sending a parcel</button>
              <button>sending a parcel</button>
              <button>sending a parcel</button>
            </div> */}
      {/* <div className='texxt'>PostalFinder</div> */}
      <div>
      <input
        type="text"
        placeholder="Search..."
      />
      <button >Search</button>
    </div>
    <div className='buttnbar'><ul className='barul'>
      <li className='listhero'>Sending</li>
      <li className='listhero'>Reciving</li>
      <li className='listhero'>Help</li>
      <li className='listhero'>Business</li>
      <li className='listhero'>Home</li>
      <li className='listhero'>About</li>
      </ul></div>
      
    </div>
  )
}

export default Hero
