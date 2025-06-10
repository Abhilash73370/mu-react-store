import React from 'react'
import { AppContext } from './App'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Cart() {
    const { cart, setCart,email } = useContext(AppContext);
    const Navigate = useNavigate();

    const increment = () => {
        setCart({ ...cart, qty: cart.qty + 1 });
    };

    const decrement = () => {
        if (cart.qty > 1) {
            cart.qty > 0 && setCart({ ...cart, qty: cart.qty - 1 });
        }
    };
    const returntologin = () => {
        Navigate("/login");
    }

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
           <p>
            {email? ( <button >Place Order</button>):(<button onClick={returntologin}> Login to Order</button>)}
           
           
           </p>
        </div>
    );
}