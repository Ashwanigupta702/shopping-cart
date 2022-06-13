import React, { useState } from "react";



const Cards = ({ item, handleClick,handleChange ,cart, setCart}) => {
  const { title, author, price, img} = item;  
  const [price1, setPrice1] = useState(0);
  const [s,setS]=useState(1);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart([...arr]);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice1(ans);
  };
  const check=(id)=>{
    if(item.amount==1)
    {
      setS(1);
      handleChange(item, -1);
      handleRemove(item.id);
    }
    else{
      handleChange(item, -1);
    }
  }
  const he=()=>{
    setS(0);
    handleClick(item);
    handleChange(item,1);
  }

  return (
    <div className="cards" >
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details " >
        <p>{title}</p>
        <p>{author}</p>
        <p>Price - {price}Rs</p>
        {item.show==0 ? (<button className="btn-danger ms-2"  style={{cursor:"pointer"}} onClick={() => he()}>Add to Cart</button>):
        <div  >
            <button style={{cursor: "pointer"}} onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button style={{cursor: "pointer"}} onClick={() => check(item.id)}>-</button>
          </div>
}
      </div>
    </div>
  );
};

export default Cards;


// id, title, autor, price, img
