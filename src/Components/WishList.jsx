import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromWishlist } from '../Redux/slices/wishlistSlice';
import { addToCart } from '../Redux/slices/cartSlice';


function WishList() {
  const wishlistArray = useSelector((state) => state.wishlistReducer) //to get the wishlist Array
  const dispatch = useDispatch()
  const handleWishListCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(deleteFromWishlist(product.id))
  }
  
  return (
    <div>
 <div className='row mb-5'>
      {
        wishlistArray?.length > 0 ?wishlistArray.map((carts)=>(
          <div className='col'>
             <div className="products">     
      <div className="product-card">
        <div className="discount-badge">{carts.discountPercentage}</div>
       <img src="/images/joystick.png" alt="joystick" />
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
    </div>
    </div>
    </div>
    
  )):'null'
}

    </div>
   
  )
}

export default WishList