import React from 'react'
import './footer.css'
export default function Footer() {
  return (
<>
<div className='footer'>
        <div className='sec1'>
            <h3>About Us</h3>
            <p>Our Company</p>
            <p>Our Services</p>
            <p>Jobs and Careers</p>
            <p>Our Customers</p>
            
        </div>
        <div className='sec1'>
            <h3>Our other websites</h3>
            <p>International Distributions</p>
            <p>Services</p>
            <p>Postal Finder Mail</p>
            <p>I'm An Employee</p>
        </div>
        <div className='sec1'>
            <h3>
                Our website
                </h3>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
                <p>Accessiblity</p>
                <p>Site Map</p>
        </div>
    </div>


           <div className='collsp'>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        ABOUT US
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body ulul"><ul>
        <li className='lili'>Our company</li>
        <li className='lili'>Our services</li>
        <li className='lili'> Our partners</li>
        <li className='lili'>Our customers</li>
        <li className='lili'>Our blog</li>
        <li className='lili'>Jobs and Careers</li>
        <li className='lili'>Sustainability</li>
        <li className='lili'>Environmental Policy</li>
        <li className='lili'>Corporate Fundraising</li>
        </ul></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Our Other Websites
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body ulul">
      <ul className='ulul'>
        <li className='lili'>International Distributions</li>
        <li className='lili'>Services</li>
        <li className='lili'>Postal Finder</li>
        <li className='lili'>I'm an Employee</li>
        
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Our Website
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body ulul">
      <li className='lili'> Privacy Policy</li>
        <li className='lili'>Cookies Policy</li>
        <li className='lili'>Accessiblity</li>
        <li className='lili'>Conditions of Carriage</li>
        <li className='lili'>Change Consent Policy</li>
        <li className='lili'>Site Map</li>
      </div>
    </div>
  </div>
</div>
        </div> 


        <div className='grow'>
            Togethger we can grow !
        </div>
        <div className='endung'>
            Part of Postal India Pvt LTD.
            <br></br>
            &copy;2021 All rights reserved | Designed by Barinder Singh 
        </div>
</>
  )
}
