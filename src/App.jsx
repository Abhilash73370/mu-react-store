import { useState,createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Foter";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
export const AppContext = createContext()  // context variable like global variable , can access by any component becasue used export keyword

function App() {
  // const [user, setUser] = useState({}); // create a context by using hook , attach these 2 vairables to app , in such a way it can access
  const [users,setUsers] = useState([]);// to store an array of elemt
const [cart,setCart] = useState([]); // to store an array of elemt
const [email,setEmail] = useState(); // to store an email

  return (
    <div>
     <AppContext.Provider value={{users,setUsers,cart,setCart,email,setEmail}}>     {/* //variable available for child component */}
      <BrowserRouter>
        <Header name="mu-react-store" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}
export default App;