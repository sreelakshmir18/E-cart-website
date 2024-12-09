import React, { useEffect, useState } from 'react'
import "./Cart.css";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, emptyCart } from '../Redux/slices/cartSlice';

function Cart() {

  const cartArray = useSelector((state) => state.cartReducer) //to get the cart Array.
  const dispatch = useDispatch()

  const [cartTotal,setCartTotal] = useState('')

  const getCartTotal=()=>{
    if(cartArray.length>0){
      setCartTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setCartTotal(0)
    }
  }

  const handleCartOrder=()=>{
    dispatch(emptyCart())
    alert('Your cart order has been placed.')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartArray])

  return (
    <div className="cart-container">
    <table className="cart-table">
    {
      cartArray?.length > 0 ?cartArray.map((carts)=>(
        <tr>
          <th scope='row'>{carts.id}</th>
          <td>{carts.title}</td>
          <td>
            <img src={carts.thumbnail} width={'100px'} height={'100px'}  alt="" />
            </td>
          <td>{carts.price}</td>
          <td><MdDelete onClick={()=>dispatch(deleteFromCart(carts.id))}  className='text-danger  fs-3 m-4 '/></td>
        </tr>
      )):'Your cart is empty'}
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="product-info">
            <img src="{carts.thumbnail}" alt="" className='product-image' />
              <span>{carts.title}</span>
            </div>
          </td>
          <td>{carts.price}</td>
          <td>
            <select className="quantity">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
            </select>
          </td>
          <td>{carts.price}</td>
        </tr>
        <tr>
          <td>
            <div className="product-info">
            <img src="{carts.thumbnail}" alt=""  className='product-image'/>
              <span>{carts.title}</span>
            </div>
          </td>
          <td>{carts.price}</td>
          <td>
            <select className="quantity">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
            </select>
          </td>
          <td>{carts.price}</td>
        </tr>
      </tbody>
    </table>
    <div className="cart-actions">
      <button className="btn return-btn">Return To Shop</button>
      <button className="btn update-btn">Update Cart</button>
    </div>
    <div className="coupon-container">
        <input type="text" placeholder='Coupon Code' className='coupon-input' />
      <button className="btn apply-coupon-btn">Apply Coupon</button>
    </div>
    <div className="cart-total">
      <h3>Cart Total</h3>
      <p>Subtotal: <span>{carts.discountedTotal}</span></p>
      <p>Shipping: <span>Free</span></p>
      <p>Total: <span>{carts.discountedTotal}</span></p>
      <button className="btn checkout-btn">Proceed to Checkout</button>
    </div>
  </div>
  )
}

export default Cart