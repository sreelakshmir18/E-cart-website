import React from 'react'
import "./Header.css";
import { Navbar, Nav, Container, NavDropdown, Form, Button } from 'react-bootstrap';

function Header() {
  return (
    <div className='header'>

<div className="top-bar">
        <div className="head">
          <span>Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!<a href='/'>ShopNow</a> </span>
        </div>

          <span>
            <select className="language-dropdown">
              <option value="EN">EN</option>
              <option value="FR">FR</option>
              <option value="ES">ES</option>
            </select>
          </span>
        </div>


<div className='navbar'>

            <div className='d-flex search-bar ms-2'>
                <div className='home1'>
               <div className='logo'><span>Exclusive</span></div> 
               <div className='home'><span>Home</span></div> 
               <div className='contact'><span>Contact</span></div> 
               <div className='about'><span>About</span></div> 
               <div className='signup'><span><a href='/SignUp'>SignUp</a></span></div> 
               <div className='signin'><span><a href='/Login'>SignIn</a></span></div> 
                </div>
            </div>
  


        <div className='nav'>    
              <input
                type="search"
                placeholder="What are you looking for??"
                className="form-control me-2"
                aria-label="Search"
              />

           <Button variant="outline-secondary">
                <img src="/images/Component 2.png" alt="Search Icon" />
              </Button>
            </div>

            <div className="wishlist-icon me-3">
              <img src="/images/Wishlist.png" alt="WishList Icon" />
            </div>

            <div className="cart-icon me-3">
              <img src="/images/Cart1.png" alt="Cart Icon" />
            </div>

</div>


</div>
  )
}

export default Header