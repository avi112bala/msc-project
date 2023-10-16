import React from 'react'
import logo from './image/image 1.png'
import facebook from './image/Social link.png'
import instagram from './image/instagram.png'
import linkedin from './image/linkedin logo.png'
import whatsapp from './image/whatsapp.png'

const Footers = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="footlogo">
            <img src={logo} />
            <p>
              India's first platform dedicated to simplifying partner search
            </p>
          </div>
          <div className="footdiv">
            <div className="divfoot">
              <h1>COMPANY</h1>
              <ul>
                <li>About</li>
                <li>Pricing</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="divfoot">
              <h1>SOLUTIONS</h1>
              <ul>
                <li>Search</li>
                <li>connect</li>
                <li>Research</li>
                <li>Academy</li>
              </ul>
            </div>
            <div className="divfoot">
              <h1>RESOURCES</h1>
              <ul>
                <li>Blogs</li>
                <li>Forms</li>
              </ul>
            </div>
            <div className="divfoot">
              <h1>SUPPORT</h1>
              <ul>
                <li>Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="divfoot">
              <h1>LEGAL</h1>
              <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>
          <div className="line"></div>
          <div className="dataicon">
            <p>
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
            <div className="socical">
              <div className="social-link-logo">
                <img src={facebook} alt="" />
              </div>
              <div className="social-link-logo">
                <img src={instagram} alt="" />
              </div>
              <div className="social-link-logo">
                <img src={linkedin} alt="" />
              </div>
              <div className="social-link-logo">
                <img src={whatsapp} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer2">
          <div className='footercontent'>
            <p>
              Registered trademark of India Private Limited © 2023 loerumipsum
              Inc. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footers
