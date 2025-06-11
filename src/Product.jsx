import React, { use ,useState   } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
export default function Product() {
    // const [count,setCount] = useState(0);
    const [products, setProducts] = useState([]); 

    
     const fetchProducts = async () => {   // js is synchronous by deafult, so we need to make it async to use await , fot it to run in its own thread , since it takes time to load data from database
         const url = "https://gcet-node-app.vercel.app/products/all"
        const res = await axios.get(url)   //it runs independently 
        setProducts(res.data)  
        }
    useEffect (() => {
       fetchProducts();
       return () => {               
       }
    },[])
  return (
    <div>
        {/* {count}
      <button onClick={() => setCount(count + 1)}>Update</button>
        Product */}
    {products.map(product => (
        <li>{product.name}</li>
    ))}
        </div>
  )
}

