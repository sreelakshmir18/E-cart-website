import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Home.css";
import useFetch from '../hooks/useFetch'
function Home() {

  const result = useFetch("https://dummyjson.com/carts")
  console.log(result);
  

  return (
<>
    <div className='mainhome'>
    <div className='homepage'>
      
  <img src="/images/iphone.png" alt="iphone" />


  <p style={{
          position: 'absolute',
          top: '40%',
          left: '15%',
          transform: 'translate(-46%, -50%)',
          color: 'white',
          fontSize: '30px',
          padding: '5px',
          borderRadius: '5px',
          textAlign: 'right',
          maxWidth: '90%',
        }}>

          iphone 16 Series
          
        </p>

        <p style={{
          position: 'absolute',
          top: '55%',
          left: '15%',
          transform: 'translate(-46%, -50%)',
          color: 'white',
          fontSize: '50px',

          padding: '5px',
          borderRadius: '5px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          Up to 10% <br></br>
          off Voucher
        </p>


        <p style={{
          position: 'absolute',
          top: '70%',
          left: '15%',
          transform: 'translate(-46%, -50%)',
          color:'white',
          fontSize: '20px',

          padding: '5px',
          borderRadius: '2px',
          textAlign: 'left',
          maxWidth: '90%',
        }}>

          <a href='#' >Shop now</a>
        </p>
      </div>
              {/* second row */}
     <section className="flash-sales">
    <div className="hed">
      <h2>Today's <span>Flash Sales</span></h2>
      <div className="timer">
        <div className="time-box">
          <span>03</span>
          <p>Days</p>
        </div>
        <div className="time-box">
          <span>23</span>
          <p>Hours</p>
        </div>
        <div className="time-box">
          <span>19</span>
          <p>Minutes</p>
        </div>
        <div className="time-box">
          <span>56</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
    <div className="products">     
      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
       <img src="{carts.thumbnail}" alt="joystick" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (88)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (carts))}</button>
          <button>👁</button>
        </div>
      </div>
     
      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
       <img src="{carts.thumbnail}" alt="keyboard" />
        <h3>{carts.title}</h3>
        <div class="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (75)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>
     
      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
       <img src="{carts.thumbnail}" alt="monitor" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (99)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>
    
      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
        <img src="{carts.thumbnail}" alt="chair" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (89)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>

      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
        <img src="{carts.thumbnail}" alt="chair" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (89)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>

      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
        <img src="{carts.thumbnail}" alt="chair" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (89)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>
    </div>
  </section>
  <button className="shop-now">View All Products</button>
         
              {/* Third Row */}
     <section className="browse-by-category">
    <div className="main-head">
      <h2>{carts.title}</h2>
    </div>


    <div className="category">
      <div className="category-card">
       <img src="{carts.thumbnail}" alt="Category-CellPhone" />
        <h3>{carts.title}</h3>
      </div>

      <div className="category-card">
       <img src="{carts.thumbnail}" alt="Category-Computer" />
        <h3>{carts.title}</h3>
      </div>

      <div className="category-card">
       <img src="{carts.thumbnail}" alt="Category-SmartWatch" />
        <h3>{carts.title}</h3>
      </div>

      <div className="category-card">
       <img src="{carts.thumbnail}" alt="Category-Headphone" />
        <h3>{carts.title}</h3>
      </div>

      <div className="category-card">
       <img src="{carts.thumbnail}" alt="Category-Gamepad" />
        <h3>{carts.title}</h3>
      </div>

    </div>
  </section>


  {/* Fourth Row */}

  <section className="flash-sale">
    <div className="sale">
      <h2>{carts.title}</h2>
      <button className="shop-n">View All</button>    
    </div>

    <div className="prod">     
      <div className="prod-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
       <img src="{carts.thumbnail}" alt="joystick" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (88)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>
     
      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
       <img src="{carts.thumbnail}" alt="keyboard" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (75)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>
     
      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
       <img src="{carts.thumbnail}" alt="monitor" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (99)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>
    
      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
        <img src="{carts.thumbnail}" alt="chair" />
        <h3>{carts.title}</h3>
        <div className="price">
          <span className="current">{carts.price}</span>
          <span className="original">{carts.price}</span>
        </div>
        <div className="rating">★ ★ ★ ★ ☆ (89)</div>
        <div className="actions">
          <button>onClick={()=>dispatch(addToWishlist (product))}</button>
          <button>👁</button>
        </div>
      </div>

    </div>
  </section>

{/* fifth Row */}

<div className="wallpaper">
  <div className="description">
    <h1>Enhance Your <br /> Music Experience</h1>
  </div>
  <div className="image-container">
    <img src="{carts.thumbnail}" alt="speaker" />
  </div>
</div>


</div> 
</>
  )
}

export default Home  