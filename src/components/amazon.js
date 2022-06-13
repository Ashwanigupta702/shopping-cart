import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
import React, { useState } from "react";

const Amazon = ({ handleClick,handleChange,cart ,setCart}) => {
  
  return (
    <section className="yo">
      {list.map((item) => (
        <Cards cart={cart} setCart={setCart} key={item.id} item={item} handleClick={handleClick} handleChange={handleChange} />
      ))}
    </section>
  );
};

export default Amazon;
