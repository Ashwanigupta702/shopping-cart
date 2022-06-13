import React, { useState, useEffect } from "react";
import "../styles/cart.css";


const Cart = ({ cart, setCart, handleChange ,setShow}) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  const hw=(item)=>{
    if(item.amount===1)
    {
      handleChange(item, -1);
      handleRemove(item.id);
    }
    else{
      handleChange(item, -1);
    }
    
  };
 const hr=(item)=>{
  handleRemove(item.id);
  item.amount=1;
 }
  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => hw(item)}>-</button>
          </div>
          <div>
            <span>{item.amount}*{item.price}={item.amount*item.price}</span>
            <button onClick={() => hr(item)}>Remove</button>
          </div>
        </div>
      ))}
      {price >0 ?(      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>):<div className="total"><span>Your Cart is Empty</span>
      <span style={{cursor: "pointer"}} onClick={() => setShow(true)}>Click here</span>
      </div>}

    </article>
  );
};

export default Cart;
