import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <div>
    <footer className="footer">  
      <div className="footer-main">
      
        <div className="footer-section footer-logo">
          <p>Exclusive</p>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="text" placeholder='Enter Your Email' />

          {/* <div className="social-icons">
            <span><img src="/images/instagram.svg" alt="" /></span>
            <span><img src="/images/twitter.svg" alt="" /></span>
            <span><img src="/images/facebook.svg" alt="" /></span>
          </div> */}
        </div>


        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</li> 
            <li>exclusive@gmail.com</li>
            <li>+88907-12345-1234</li>
          </ul>
        </div>

        {/* Information Links */}
        <div className="footer-section">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Login/ Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div className="footer-Link">
          <h3>Quick Link</h3>
          <ul>
            <li>Privacy policy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h2>Download App</h2>
          <p>Save $3 with App User</p>
          <p><img src="/images/Qr Code.png" alt="" /> </p>
          <p><img src="/images/Frame 718.png" alt="" /> </p>
          <div className="app-links">
            {/* <button><img src="/images/appStore.svg" alt="" /></button>
            <button><img src="/images/Google Play.svg" alt="" /></button> */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>  © Copyright Rimel 2022. All Rights Reserved</p>
      </div>
    </footer>
  </div>
  )
}

export default Footer