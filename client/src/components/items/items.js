import React, { useState, useEffect } from "react";
import "./items.css";
import { productList } from '../../redux/action/productAction';
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux'

function Items() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData); //accessing data use useSelector
  console.warn("data in main component", data);
  useEffect(()=>{
    dispatch(productList())
  },[])

  return (
    <div className="card-container">
      {data.length > 0 &&
        data.map((item) => (
          <div className="card" key={item.id}>
            <img
              src="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70"
              alt="product"
            />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <button className="button">Buy Now</button>&nbsp;&nbsp;
              <button className="bttn" >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
export default Items;