import React, { useState } from "react";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

const App = () => {
  const [show, setShow] = useState(true);
 
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    item.show=1;
    setCart([...cart,item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    arr[ind].show=1;

    if (arr[ind].amount === 0) {arr[ind].amount = 1;
      arr[ind].show=0;
    }
    setCart([...arr]);
  };

  

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon cart={cart} setCart={setCart} handleClick={handleClick} handleChange={handleChange} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} setShow={setShow} />
      )}
    </React.Fragment>
  );
};

export default App;
