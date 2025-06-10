import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { AppContext } from "./App";
import { useContext } from "react";


export default function Home() {
  const { setCart } = useContext(AppContext); // Access setCart from AppContext
  const Navigate = useNavigate();
  const buynow = (obj) => {
    setCart({id:obj.id, name: obj.name, price: obj.price, desc:obj.desc,  qty:1,}); // Set the cart with the product details
    Navigate("/cart");
   
  };
  const products = [
    {
      id: 1,
      name: "Product 1",
      desc: "This is the description of the product",
      price: 45,
      imgUrl: "https://picsum.photos/id/1/300/300",
    },
    {
      id: 2,
      name: "Product 2",
      desc: "This is the description of the product",
      price: 50,
      imgUrl: "https://picsum.photos/id/1/300/300",
    },
    {
      id: 3,
      name: "Product 3",
      desc: "This is the description of the product",
      price: 75,
      imgUrl: "https://picsum.photos/id/1/300/300",
    },
  ];

  return (
    <div className="App-Home-Row">
      {products.map((product) => (
        <div>
          <img src={product.imgUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <h4>{product.price}</h4>
          <p><button onClick= {() =>buynow(product)}>Add to Cart</button></p>  {/* sends entire product object to buynow function */}
        </div>
      ))}
    </div>
  );
}