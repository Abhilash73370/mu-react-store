import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "./App";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const { setCart, email } = useContext(AppContext);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "http://localhost:8080/users";
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (err) {
        setError("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  const buyNow = (obj) => {
    setCart({
      id: obj.id,
      name: obj.name,
      price: obj.price,
      desc: obj.desc,
      qty: 1,
      email: email,
    });
    Navigate("/cart");
  };

  return (
    <div className="App-Home-Row">
      {error && <div style={{ color: "red" }}>{error}</div>}
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.imgUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.desc}</p>
          <h4>{product.price}</h4>
          <p>
            <button onClick={() => buyNow(product)}>Buy now</button>
          </p>
        </div>
      ))}
    </div>
  );
}