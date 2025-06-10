import React from 'react'
import { AppContext } from './App'
import { useContext } from 'react'
export default function Cart() {
    const { cart, setCart } = useContext(AppContext);

    const increment = () => {
        setCart({ ...cart, qty: cart.qty + 1 });
    };

    const decrement = () => {
        if (cart.qty > 1) {
            cart.qty > 0 && setCart({ ...cart, qty: cart.qty - 1 });
        }
    };

    return (
        <div>
            <h1>
                name = {cart.name} </h1>
               <h2> 
                price = {cart.price}
                <br />
                desc = {cart.desc}
                <br />
                qty = 
                <button onClick={decrement}>-</button>
                {cart.qty} 
                <button onClick={increment}>+</button>
                <br />
                id = {cart.id}
                </h2>
           <hr/>
           <h2>Total = {cart.price * cart.qty}</h2>
           
           <hr/>
           <button >Place Order</button>
           <button> Login to Order</button>
        </div>
    );
}